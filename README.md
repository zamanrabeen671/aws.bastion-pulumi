AWS Bastion with Pulumi

This project provisions AWS infrastructure using Pulumi
 with TypeScript.
It creates a VPC, subnet, internet gateway, and route table, and exposes their IDs for further use (e.g., setting up a Bastion host or other resources).

📂 Project Structure
.
├── index.ts                 # Main Pulumi entry file
├── vpc/
│   └── vpc.ts               # Defines VPC, Subnet, Internet Gateway
├── route-table/
│   └── route-table.ts       # Defines Route Table and associations
└── package.json


vpc/vpc.ts → Creates VPC, Subnet, and Internet Gateway, and exports their IDs.

route-table/route-table.ts → Creates a Route Table and exports its ID.

index.ts → Imports all resources and logs their IDs for reference.

🚀 Getting Started
1. Install Dependencies
npm install

2. Configure Pulumi

Login to Pulumi (locally or via Pulumi Cloud):

pulumi login


Set your AWS region:

pulumi config set aws:region us-east-1

3. Deploy Infrastructure

Run:

pulumi up


Pulumi will show a preview of resources to create. Confirm with yes.

4. Check Outputs

The index.ts logs resource IDs:

vpc id vpc-xxxxxxxx
subnet id subnet-xxxxxxxx
igw id igw-xxxxxxxx
route-table id rtb-xxxxxxxx

🛠️ Useful Commands

Update stack:

pulumi up


Destroy stack:

pulumi destroy


View stack state:

pulumi stack

📌 Notes

Ensure your AWS CLI is configured with valid credentials.

This setup provides the networking foundation. You can extend it by adding:

Bastion host EC2 instance

Security groups

NAT Gateway

Private subnets
