/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  VpnLinkConnectionsListByVpnConnectionResponse,
  VpnLinkConnectionsListByVpnConnectionNextResponse
} from "../models";

/**
 * Class representing a VpnLinkConnections.
 */
export class VpnLinkConnections {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VpnLinkConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
   * @param connectionName The name of the vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  listByVpnConnection(
    connectionName: string,
    resourceGroupName: string,
    gatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnLinkConnectionsListByVpnConnectionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        connectionName,
        resourceGroupName,
        gatewayName,
        options: operationOptions
      },
      listByVpnConnectionOperationSpec
    ) as Promise<VpnLinkConnectionsListByVpnConnectionResponse>;
  }

  /**
   * ListByVpnConnectionNext
   * @param connectionName The name of the vpn connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param nextLink The nextLink from the previous successful call to the ListByVpnConnection method.
   * @param options The options parameters.
   */
  listByVpnConnectionNext(
    connectionName: string,
    resourceGroupName: string,
    gatewayName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnLinkConnectionsListByVpnConnectionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        connectionName,
        resourceGroupName,
        gatewayName,
        nextLink,
        options: operationOptions
      },
      listByVpnConnectionNextOperationSpec
    ) as Promise<VpnLinkConnectionsListByVpnConnectionNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByVpnConnectionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/vpnConnections/{connectionName}/vpnLinkConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.connectionName2,
    Parameters.resourceGroupName10,
    Parameters.gatewayName
  ],
  serializer
};
const listByVpnConnectionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSiteLinkConnectionsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.connectionName2,
    Parameters.resourceGroupName10,
    Parameters.gatewayName,
    Parameters.nextLink22
  ],
  serializer
};