# AWS Bastion with Pulumi

This project uses [Pulumi](https://www.pulumi.com/) with **TypeScript** to define AWS networking resources.  
It sets up a **VPC, Subnet, Internet Gateway, and Route Table**, and makes their IDs available for further use (e.g., deploying a Bastion host or other services).

---

🏗️ Project System Design

This Pulumi project sets up the networking foundation for deploying AWS resources, such as a Bastion EC2 instance. Here's how the components are connected and why:

VPC (Virtual Private Cloud)

Acts as an isolated network in AWS.

All AWS resources (EC2, RDS, etc.) are deployed inside a VPC.

Ensures network security and control over IP ranges.

Subnet

Logical division of the VPC.

Public subnet: resources can have public IPs and access the internet.

Private subnet: resources are internal only.

Our Bastion host would sit in the public subnet to allow SSH access from the internet.

Internet Gateway (IGW)

Connects the VPC to the internet.

Required for any public subnet EC2 instance (like Bastion) to allow inbound/outbound internet traffic.

Route Table

Directs traffic within the VPC and to the internet.

Routes from the public subnet point to the IGW so EC2 instances can reach the internet.

Ensures proper network traffic flow between resources.

EC2 (Bastion) [Future]

Deploys in the public subnet.

Connects to private subnet resources (e.g., private EC2s or databases) via SSH.

Acts as a secure entry point to the internal network.


- **`index.ts`** → Entry point, imports resources and prints their IDs.  
- **`vpc/vpc.ts`** → Creates the VPC, Subnet, and Internet Gateway.  
- **`route-table/route-table.ts`** → Creates the Route Table and exports its ID.  

---


## 📝 Summary

- Provides a **modular Pulumi setup** for AWS networking.  
- Keeps resources in separate files for better organization and reusability.  
- The `index.ts` ties everything together and logs the created resource IDs.  
- Serves as a foundation for extending infrastructure with:
  - Bastion host EC2 instance  
  - Security groups  
  - NAT gateway  
  - Private subnets  

'## 🏗️ Architecture Diagram

        Internet
           |
           v
    +------------------+
    |  Internet Gateway |
    +---------+--------+
              |
    +---------v--------+
    |       VPC        |
    | (10.0.0.0/16)    |
    +---------+--------+
              |
     +--------v---------+
     |    Public Subnet  |
     | (10.0.1.0/24)    |
     +--------+---------+
              |
       +------v------+
       | Route Table |
       +------^------+
              |
        Bastion EC2
         (SSH Access)


---

## 🚀 How to Run

### 1. Install dependencies
```bash
npm install

#Login to Pulumi (locally or via Pulumi Cloud):

pulumi login

pulumi config set aws:region us-east-1

#run and deploy
pulumi up

