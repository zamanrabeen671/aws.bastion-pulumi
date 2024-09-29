import * as aws from "@pulumi/aws";

export const custom_tags = {
    "managed_by": "cat_cloud",
    env: "dev"
}
// Allocate a new VPC with a custom CIDR block.
const vpc = new aws.ec2.Vpc("cat_vpc", {
    cidrBlock: "10.10.0.0/16",
    tags: custom_tags
});

const subnet = new aws.ec2.Subnet("cat-public-subnet", {
    vpcId: vpc.id,
    cidrBlock: "10.10.1.0/24",
    mapPublicIpOnLaunch: true,
    tags: custom_tags

})

const igw = new aws.ec2.InternetGateway("cat-igw", {
    vpcId: vpc.id,
    tags: custom_tags
})
export const vpcId = vpc.id;
export const subnetId = subnet.id
export const igwId = igw.id