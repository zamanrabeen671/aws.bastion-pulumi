import * as pulumi from "@pulumi/pulumi";
import { igwId, subnetId, vpcId } from './vpc/vpc';
import { routetableId } from './route-table/route-table';

console.log("vpc id",vpcId)
console.log("subnet id", subnetId)
console.log("igw id", igwId)
console.log("route-table id", routetableId)
