import * as aws from "@pulumi/aws";
import { custom_tags, subnetId, vpcId } from "../vpc/vpc";

const AMIID = "ami-02eb1fd3c2e8fb6d0";

const bastionSg = new aws.ec2.SecurityGroup("cat-sg-bastion", {
    vpcId: vpcId,
    description: "Allow SSH and HTTP inbound traffic",
    ingress: [
        {
            protocol: "tcp",
            fromPort: 22, // Allow SSH
            toPort: 22,
            cidrBlocks: ["0.0.0.0/0"], // Open to the world (for SSH)
        },
        {
            protocol: "tcp",
            fromPort: 80, // Allow HTTP
            toPort: 80,
            cidrBlocks: ["0.0.0.0/0"], // Open to the world (for HTTP)
        },
    ],
    egress: [
        {
            protocol: "-1", // All protocols
            fromPort: 0,
            toPort: 0,
            cidrBlocks: ["0.0.0.0/0"], // Allow outbound to the world
        },
    ],

})

const instance = new aws.ec2.Instance("instance", {
    ami: AMIID,
    instanceType: "t2.micro",
    vpcSecurityGroupIds: [bastionSg.id],
    subnetId: subnetId,
    keyName: "Mykey",
    associatePublicIpAddress: true,
    tags: custom_tags
});

export const bastionSgId = bastionSg