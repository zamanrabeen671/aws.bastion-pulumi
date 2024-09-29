import * as aws from "@pulumi/aws";
import { custom_tags, igwId, subnetId, vpcId } from "../vpc/vpc";

const routetable = new aws.ec2.RouteTable("cat-route-table", {
    vpcId: vpcId,
    tags: custom_tags
})

const igwRoute = new aws.ec2.Route("cat-igw-route", {
    routeTableId: routetable.id,
    destinationCidrBlock: "0.0.0.0/0",
    gatewayId: igwId
})

const routeTableAssociation = new aws.ec2.RouteTableAssociation("cat-route-association", {
    subnetId: subnetId,
    routeTableId: routetable.id
})
export const routetableId = routetable.id;
export const igwRouteId = igwRoute.id
export const routeTableAssociationId = routeTableAssociation.id