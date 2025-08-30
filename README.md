# AWS Bastion with Pulumi

This project uses [Pulumi](https://www.pulumi.com/) with **TypeScript** to define AWS networking resources.  
It sets up a **VPC, Subnet, Internet Gateway, and Route Table**, and makes their IDs available for further use (e.g., deploying a Bastion host or other services).

---

## 📂 Project Structure

.
├── index.ts # Main Pulumi entry file
├── vpc/
│ └── vpc.ts # Defines VPC, Subnet, and Internet Gateway
├── route-table/
│ └── route-table.ts # Defines Route Table and associations
└── package.json # Node.js dependencies and scripts


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

            +---------------------+
            |        VPC          |
            |   (Custom Network)  |
            +----------+----------+
                       |
            +----------v----------+
            |       Subnet        |
            |   (Public Subnet)   |
            +----------+----------+
                       |
            +----------v----------+
            |   Route Table       |
            |  (Routes traffic)   |
            +----------+----------+
                       |
            +----------v----------+
            | Internet Gateway    |
            |  (Access to Internet)|
            +---------------------+

---

## 🚀 How to Run

### 1. Install dependencies
```bash
npm install
