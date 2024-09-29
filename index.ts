import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { igwId, subnetId, vpcId } from './vpc/vpc';

console.log("vpc id",vpcId)
console.log("subnet id", subnetId)
console.log("igw id", igwId)
