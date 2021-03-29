# API REFERENCE

#### class: [api](#class:api)

  - [getCitrixCloudTokens({ cwaAPI, citrixCloudCustomerId, citrixCloudClientId, citrixCloudClientSecret })](#getCitrixCloudTokens({cwaAPI,citrixCloudCustomerId,citrixCloudClientId,citrixCloudClientSecret}))
  - [getIntegrations({ authInstance, microappsAdminUrl })](#getIntegrations({authInstance,microappsAdminUrl}))
  - [getBundleCatalogue({ authInstance, microappsAdminUrl })](#getBundleCatalogue({authInstance,microappsAdminUrl}))
  - [updateBundleCatalogue({ authInstance, microappsAdminUrl, catalogueId })](#updateBundleCatalogue({authInstance,microappsAdminUrl,catalogueId}))
  - [updateIntegrationConfiguration({ authInstance, microappsAdminUrl, integrationId, integrationConfiguration }](#updateIntegrationConfiguration({authInstance,microappsAdminUrl,integrationId,integrationConfiguration}))
  - [getIntegration({ authInstance, microappsAdminUrl, integrationId })](#getIntegration({authInstance,microappsAdminUrl,integrationId}))
  - [integrationLogout({ authInstance, microappsAdminUrl, integrationId })](#integrationLogout({authInstance,microappsAdminUrl,integrationId}))
  - [validateConfiguration({ authInstance, microappsAdminUrl, serviceKey, configuration })](#validateConfiguration({authInstance,microappsAdminUrl,serviceKey,configuration}))
  - [addApp({ authInstance, microappsAdminUrl, data })](#addApp({authInstance,microappsAdminUrl,data}))
  - [getProcessStatus({ authInstance, microappsAdminUrl, processId })](#getProcessStatus({authInstance,microappsAdminUrl,processId}))
  - [getEntities({ authInstance, microappsAdminUrl, integrationId })](#getEntities({authInstance,microappsAdminUrl,integrationId}))
  - [createEntity({ authInstance, microappsAdminUrl, integrationId, entityData })](#createEntity({authInstance,microappsAdminUrl,integrationId,entityData}))
  - [finalizeConfig({ authInstance, microappsAdminUrl, integrationId })](#finalizeConfig({authInstance,microappsAdminUrl,integrationId}))
  - [getApps({ authInstance, microappsAdminUrl })](#getApps({authInstance,microappsAdminUrl}))
  - [getNotifications({ authInstance, microappsAdminUrl, appId })](#getNotifications({authInstance,microappsAdminUrl,appId}))
  - [runNotificationEvent({ authInstance, microappsAdminUrl, notificationId })](#runNotificationEvent({authInstance,microappsAdminUrl,notificationId}))
  - [startSynchronization({ authInstance, microappsAdminUrl, integrationId,synchronizationType )}](#startSynchronization({authInstance,microappsAdminUrl,integrationId,synchronizationType}))
  - [integrityCheck({ authInstance, microappsAdminUrl })](#integrityCheck({authInstance,microappsAdminUrl}))
  - [deleteIntegration({ authInstance, microappsAdminUrl, integrationId })](#deleteIntegration({authInstance,microappsAdminUrl,integrationId}))
  - [getDomain({ authInstance, cwaAPI, citrixCloudCustomerId, workspaceIdentityProvider })](#getDomain({authInstance,cwaAPI,citrixCloudCustomerId,workspaceIdentityProvider}))
  - [getUsers({ authInstance, cwaAPI, domainName, forestName, appId, query, citrixCloudCustomerId,idpType })](#getUsers({authInstance,cwaAPI,domainName,forestName,appId,query,citrixCloudCustomerId,idpType}))
  - [updateSubscribers({ authInstance, microappsAdminUrl assign, userDetail, appId, domainName, forestName, workspaceIdentityProvider })](#updateSubscribers({authInstance,microappsAdminUrl,assign,userDetail,appId,domainName,forestName,workspaceIdentityProvider}))
  - [getSubscribers({ authInstance, microappsAdminUrl, appId })](#getSubscribers({authInstance,microappsAdminUrl,appId}))
  - [exportIntegration({ authInstance, microappsAdminUrl, integrationId, filePath, params })](#exportIntegration({authInstance,microappsAdminUrl,integrationId,filePath,params}))
  - [getIntegrationLog({ authInstance, microappsAdminUrl, integrationId, integrationType })](#getIntegrationLog({authInstance,microappsAdminUrl,integrationId,integrationType}))

#### class: [citrixCloud](#class:citrixCloud)
  - [getAuthenticatorCode({ secretKey }](#getAuthenticatorCode({secretKey}))
  - [getCCBearerToken({ cwaAPI, citrixCloudCustomerId, citrixCloudClientId, citrixCloudClientSecret }](#getCCBearerToken({cwaAPI,citrixCloudCustomerId,citrixCloudClientId,citrixCloudClientSecret}))
  - [createAuthInstance({ bearerToken }](#createAuthInstance({bearerToken}))

#### class: [microappsAdmin](#class:microappsAdmin)
  - [login({ page, url, username, password, mfa , secretKey }](#login({page,url,username,password,mfa,secretKey}))
  - [getIntegrationId({ authInstance, microappsAdminUrl, integrationName }](#getIntegrationId({authInstance,microappsAdminUrl,integrationName}))
  - [oauthLogout({ authInstance, microappsAdminUrl, integrationName, repeatCount }](#oauthLogout({authInstance,microappsAdminUrl,integrationName,repeatCount}))
  - [waitForSync({ getIntegration, synchronizationType }](#waitForSync({getIntegration,synchronizationType}))
  - [runSynchronization({ authInstance, microappsAdminUrl, integrationName, synchronizationType, }](#runSynchronization({authInstance,microappsAdminUrl,integrationName,synchronizationType}))
  - [createHTTPIntegration({ authInstance, microappsAdminUrl, integrationName, integrationConfiguration, }](#createHTTPIntegration({authInstance,microappsAdminUrl,integrationName,integrationConfiguration}))
  - [waitForProcessStatus({ authInstance, status, microappsAdminUrl, processId }](#waitForProcessStatus({authInstance,status,microappsAdminUrl,processId}))
  - [createJavaIntegration({ authInstance, microappsAdminUrl, integrationConfiguration, withEntities, serviceType , serviceKey, name }](#createJavaIntegration({authInstance,microappsAdminUrl,integrationConfiguration,withEntities,serviceType,serviceKey,name}))
  - [getIntegrationType({ authInstance, microappsAdminUrl, integrationName }](#getIntegrationType({authInstance,microappsAdminUrl,integrationName}))
  - [getStatusIntegration({ authInstance, microappsAdminUrl, integrationName }](#getStatusIntegration({authInstance,microappsAdminUrl,integrationName}))
  - [importIntegration({ authInstance, microappsAdminUrl, pathToFile }](#importIntegration({authInstance,microappsAdminUrl,pathToFile}))
  - [renameIntegration({ authInstance, microappsAdminUrl, integrationName, newIntegrationName, integrationConfiguration }](#renameIntegration({authInstance,microappsAdminUrl,integrationName,newIntegrationName,integrationConfiguration}))
  - [exportApp({ authInstance, microappsAdminUrl, appId, pathToFile }](#exportApp({authInstance,microappsAdminUrl,appId,pathToFile}))
  - [getMicroAppId({ authInstance, microappsAdminUrl, integrationId, appName }](#getMicroAppId({authInstance,microappsAdminUrl,integrationId,appName}))
  - [getNotificationId({ authInstance, microappsAdminUrl, appId, notificationName }](#getNotificationId({authInstance,microappsAdminUrl,appId,notificationName}))
  - [runEvent({ authInstance, microappsAdminUrl, integrationName, appName, notificationName }](#runEvent({authInstance,microappsAdminUrl,integrationName,appName,notificationName}))
  - [checkAppMissconfigurations({ authInstance, microappsAdminUrl, appId }](#checkAppMissconfigurations({authInstance,microappsAdminUrl,appId}))
  - [addSubscriber({ authInstance, appId, user, config }](#addSubscriber({authInstance,appId,user,config}))
  - [addSubscribers({ authInstance, integrationName, microapps, microappsAdminUrl, config }](#addSubscribers({authInstance,integrationName,microapps,microappsAdminUrl,config}))
  - [importIntegrationUI({ page, microappsAdminUrl, filePath }](#importIntegrationUI({page,microappsAdminUrl,filePath}))
  - [importMicroAppUI({ page, microappsAdminUrl, filePath, integrationName }](#importMicroAppUI({page,microappsAdminUrl,filePath,integrationName}))
  - [exportIntegrationUI({ page, integrationName }](#exportIntegrationUI({page,integrationName}))
  - [exportMicroAppsUI({ page, integrationName, appName }](#exportMicroAppsUI({page,integrationName,appName}))
  - [getLastTimeSync({ authInstance, microappsAdminUrl, integrationName }](#getLastTimeSync({authInstance,microappsAdminUrl,integrationName}))

##### class: [workspace](#class:workspace)
  - [workspace.login({ page, workspaceUrl, workspaceUsername, workspacePassword, workspaceIdentityProvider })](<#workspace.login({page,workspaceUrl,workspaceUsername,workspacePassword,workspaceIdentityProvider})>)
  - [workspace.skipTour({ page })](<#workspace.skipTour({page})>)
  - [workspace.goToActions({ page })](<#workspace.goToActions({page})>)
  - [workspace.startAction({ page, actionName, integrationName })](<#workspace.startAction({page,actionName,integrationName})>)
  - [workspace.getFeedNotifications({ page })](<#workspace.getFeedNotifications({page})>)
  - [workspace.waitForFeedCardId({ page, recordId[, repeatMax, waitTime, notificationId]})](<#workspace.waitForFeedCardId({page,recordId[,repeatMax,waitTime,notificationId]})>)
  - [workspace.getFeedCardButton({ page, feedCardId, buttonName })](<#workspace.getFeedCardButton({page,feedCardId,buttonName})>)
  - [workspace.waitForPopUp({ page, text })](<#workspace.waitForPopUp({page,text})>)

&nbsp;

&nbsp;

## class:api

&nbsp;
#### getCitrixCloudTokens({cwaAPI,citrixCloudCustomerId,citrixCloudClientId,citrixCloudClientSecret})

- `cwaAPI`: API environment - for STAGE/TEST environment (cloudburrito) = <b>ctxwsstgapi</b> ; for PROD environment (cloud) = <b>citrixworkspacesapi</b>
- `citrixCloudCustomerId`: Customer Id
- `citrixCloudClientId`: Client Id of user
- `citrixCloudClientSecret`: Client Secret of user

Get tokens for Citrix Cloud/Cloudburrito authorization

#### getIntegrations({authInstance,microappsAdminUrl})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin

API call for getting list of all Integrations in one customer


#### getBundleCatalogue({authInstance,microappsAdminUrl})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin

API call for getting Bundle Catalogue which has list of Integration templates, which can be used for creating Integration


#### updateBundleCatalogue({authInstance,microappsAdminUrl,catalogueId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `catalogueId`: Catalogue id of an Integration

API call for updating the Bundle Catalogue


#### updateIntegrationConfiguration({authInstance,microappsAdminUrl,integrationId,integrationConfiguration}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration
- `integrationConfiguration`: Data payload with credentials and Integration configuration

API call for updating configuration of an Integration


#### getIntegration({authInstance,microappsAdminUrl,integrationId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration

API call for getting details of an Integration


#### integrationLogout({authInstance,microappsAdminUrl,integrationId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration

API call for an OAuth logout of an Integration (Not from Citrix Cloud)


#### validateConfiguration({authInstance,microappsAdminUrl,serviceKey,configuration})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `serviceKey`: Service key of an Integration
- `configuration`: Configuration of an Integration

API call for validation that the configuration for Integration is correct


#### addApp({authInstance,microappsAdminUrl,data})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `data`: Configuration of an App

API call for adding MicroApp to an Integration


#### getProcessStatus({authInstance,microappsAdminUrl,processId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `processId`: Id of a process

API call for getting status of a Process


#### getEntities({authInstance,microappsAdminUrl,integrationId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration

API call for getting list of all Entities in Integration


#### createEntity({authInstance,microappsAdminUrl,integrationId,entityData})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration
- `entityData`: Configuration of an entity

API call for creating an Entity in Integration


#### finalizeConfig({authInstance,microappsAdminUrl,integrationId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration

API call for finishing the creation of an Integration. Is the last step of the Integration creation process


#### getApps({authInstance,microappsAdminUrl})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin

API call for getting list of MicroApps in Customer


#### getNotifications({authInstance,microappsAdminUrl,appId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `appId`: Id of a MicroApp

API call for getting list of Notifications of a MicroApp


#### runNotificationEvent({authInstance,microappsAdminUrl,notificationId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `notificationId`: Id of a Notification

API call for running a Notification


#### startSynchronization({authInstance,microappsAdminUrl,integrationId,synchronizationType})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration
- `synchronizationType`: Type of synchronization - for Full sync. = <b>FullSynchronization</b> ; for Incremental sync. <b>IncrementalSynchornization</b>

API call for starting a Synchronization of an Integration


#### integrityCheck({authInstance,microappsAdminUrl})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin

API call for checking integrity of all components (Integrations, MicroApps, Pages, ...) in Customer


#### deleteIntegration({authInstance,microappsAdminUrl,integrationId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration

API call for deleting an Integration


#### getDomain({authInstance,cwaAPI,citrixCloudCustomerId,workspaceIdentityProvider})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `cwaAPI`: API environment - for STAGE/TEST environment (cloudburrito) = <b>ctxwsstgapi</b> ; for PROD environment (cloud) = <b>citrixworkspacesapi</b>
- `citrixCloudCustomerId`: Customer Id
- `workspaceIdentityProvider`: Identity Provider that is used to store the users - <b> ad </b>/<b> aad </b>/<b> netscaler </b>/<b> okta </b>

API call for getting a Domain based on Workspace Identity Provider


#### getUsers({authInstance,cwaAPI,domainName,forestName,appId,query,citrixCloudCustomerId,idpType})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `cwaAPI`: API environment - for STAGE/TEST environment (cloudburrito) = <b>ctxwsstgapi</b> ; for PROD environment (cloud) = <b>citrixworkspacesapi</b>
- `domainName`: Name of domain
- `forestName`: Forest name, can be get from getDomain function
- `appId`: Id of a MicroApp
- `query`: List of Users
- `citrixCloudCustomerId`: Customer Id
- `idpType`: Identity Provider that is used to store the users - <b> ad </b>/<b> aad </b>/<b> netscaler </b>/<b> okta </b>

API call for getting data of specific Users


#### updateSubscribers({authInstance,microappsAdminUrl,assign,userDetail,appId,domainName,forestName,workspaceIdentityProvider})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `assign`: Action type
- `userDetail`: Data of user(s)
- `appId`: Id of a MicroApp
- `domainName`: Name of domain
- `forestName`: Forest name, can be get from getDomain function
- `workspaceIdentityProvider`: Identity Provider that is used to store the users - <b> ad </b>/<b> aad </b>/<b> netscaler </b>/<b> okta </b>

API call for updating the Subscribers of a MicroApp


#### getSubscribers({authInstance,microappsAdminUrl,appId})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `appId`: Id of a MicroApp

API call for getting list of Subscribers subscribed to a MicroApp


#### exportIntegration({authInstance,microappsAdminUrl,integrationId,filePath,params})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration
- `filePath`: Path to a file
- `params`: Mandatadory params are vendor, appId (which apps will be exported) and optional param description. Example: vendor=Citrix&appId=myAppId1&appId=myAppId2&description=

API call for exporting an Integration


#### getIntegrationLog({authInstance,microappsAdminUrl,integrationId,integrationType})

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration
- `integrationType`: Type of an Integration

API call for getting Integration log of an Integration

&nbsp;
## class:citrixCloud

#### getAuthenticatorCode({secretKey}

- `secretKey`: SecretKey that was generated when User enabled MFA

Function that generates 6 digit authenticator code for MFA during login to Citrix Cloud/Cloudburrito

#### getCCBearerToken({cwaAPI,citrixCloudCustomerId,citrixCloudClientId,citrixCloudClientSecret}

- `cwaAPI`: API environment - for STAGE/TEST environment (cloudburrito) = <b>ctxwsstgapi</b> ; for PROD environment (cloud) = <b>citrixworkspacesapi</b>
- `citrixCloudCustomerId`: Customer Id
- `citrixCloudClientId`: Client Id of user
- `citrixCloudClientSecret`: Client Secret of user

Function that returns Bearer Token for authorization to Citrix Cloud/Cloudburrito

#### createAuthInstance({bearerToken}

- `bearerToken`: Bearer token for authorization to Citrix Cloud/Cloudburrito

Function that creates authorization instance that can be used as authorization in API calls

&nbsp;
## class:microappsAdmin

#### login({page,url,username,password,mfa,secretKey}

- `page`: Methods to interact with a single tab or extension background page in Browser
- `url`: Url for login to Cloud (PROD) | Cloudburrito (STAGE/TEST)
- `username`: User's username
- `password`: User's password
- `mfa`: If true the login will go through MFA, otherwise the flow will be skipped.
- `secretKey`: SecretKey for generating 6-digit MFA code

Function for login to Citrix Cloud / Cloudburrito. The function will go through MFA, if `mfa` is true.

#### getIntegrationId({authInstance,microappsAdminUrl,integrationName}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration

Function that returns Integration Id of an Integration based on its name

#### oauthLogout({authInstance,microappsAdminUrl,integrationName,repeatCount}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration
- `repeatCount`: Optional; sets the maximum amount of tries of oAuth logout. Defaulty set as 1

Function that will perform oAuth logout in an Integration

#### waitForSync({getIntegration,synchronizationType}

- `getIntegration`: getIntegration function
- `synchronizationType`: Type of synchronization - for Full sync. = <b>FullSynchronization</b> ; for Incremental sync. <b>IncrementalSynchornization</b>

Function will wait until the synchronization will be finished.

#### runSynchronization({authInstance,microappsAdminUrl,integrationName,synchronizationType}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration
- `synchronizationType`: Type of synchronization - for Full sync. = <b>FullSynchronization</b> ; for Incremental sync. <b>IncrementalSynchornization</b>

Function that will start selected type of Synchronization in Integration and wait until the Synchronization finishes

#### createHTTPIntegration({authInstance,microappsAdminUrl,integrationName,integrationConfiguration}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration
- `integrationConfiguration`: Data payload with credentials and integration configuration

Function for creating HTTP Integrations from Bundle Catalogue (preset configuration)

#### waitForProcessStatus({authInstance,status,microappsAdminUrl,processId}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `status`: Expected status
- `microappsAdminUrl`: URL of Microapps Admin
- `processId`: Id of process

Function will wait until the selected process will have the expected status

#### createJavaIntegration({authInstance,microappsAdminUrl,integrationConfiguration,withEntities,serviceType,serviceKey,name}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationConfiguration`: Data payload with credentials and integration configuration
- `withEntities`: Optional; switch for creating entities. Defaulty set as true
- `serviceType`: Optional; switch for some Integrations, that has different flow of creating entities. Defaulty set ad null
- `serviceKey`: Service key of an integration

Function that will create Java Integration

#### getIntegrationType({authInstance,microappsAdminUrl,integrationName}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration

Function that returns Integration type

#### getStatusIntegration({authInstance,microappsAdminUrl,integrationName}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration

Function that return status of an Integration

#### importIntegration({authInstance,microappsAdminUrl,pathToFile}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `pathToFile`: Path to the exported Integration file

Function that will import an Integration from a file

#### renameIntegration({authInstance,microappsAdminUrl,integrationName,newIntegrationName,integrationConfiguration}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration
- `newIntegrationName`: New name for the Integration
- `integrationConfiguration`: Data payload with credentials and integration configuration

Function renaming Integration. Will rename from `integrationName` to `newIntegrationName`

#### exportApp({authInstance,microappsAdminUrl,appId,pathToFile}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `appId`: Id of a MicroApp
- `pathToFile`: Path to the exported Integration file

Function for exporting a MicroApp to desired path

#### getMicroAppId({authInstance,microappsAdminUrl,integrationId,appName}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationId`: Id of Integration
- `appName`: Name of a MicroApp

Function that returns MicroApp Id of MicroApp in Integration based on its name

#### getNotificationId({authInstance,microappsAdminUrl,appId,notificationName}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `appId`: Id of a MicroApp
- `notificationName`: Name of a Notification

Function that returns Notification Id of a Notification in a MicroApp based on its name

#### runEvent({authInstance,microappsAdminUrl,integrationName,appName,notificationName}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration
- `appName`: Name of a MicroApp
- `notificationName`: Name of a Notification

Function that starts a Notification from a MicroApp of a Integration based on name of the Integration, the MicroApp and the Notification

#### checkAppMissconfigurations({authInstance,microappsAdminUrl,appId}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `appId`: Id of a MicroApp

Function that returns to console.log if selected MicroApp is missconfigured. After that will return list of all missconfigurations

#### addSubscriber({authInstance,appId,user,config}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `appId`: Id of a MicroApp
- `user`: User email
- `config`: Config file

Function that subscribes a User to a MicroApp

#### addSubscribers({authInstance,integrationName,microapps,microappsAdminUrl,config}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `integrationName`: Name of an Integration
- `microapps`: MicroApps part of Integration's matrix
- `microappsAdminUrl`: URL of Microapps Admin
- `config`: Config file

Function that subscribes 1 or more users to a MicroApp

#### importIntegrationUI({page,microappsAdminUrl,filePath}

- `page`: Methods to interact with a single tab or extension background page in Browser
- `microappsAdminUrl`: URL of Microapps Admin
- `filePath`: Path to the exported Integration file

Function that imports Integration from a file through UI 

#### importMicroAppUI({page,microappsAdminUrl,filePath,integrationName}

- `page`: Methods to interact with a single tab or extension background page in Browser
- `microappsAdminUrl`: URL of Microapps Admin
- `filePath`: Path to the exported Integration file
- `integrationName`: Name of an Integration

Function that imports MicroApp from a file through UI

#### exportIntegrationUI({page,integrationName}

- `page`: Methods to interact with a single tab or extension background page in Browser
- `integrationName`: Name of an Integration

Function that exports Integration to desired path through UI

#### exportMicroAppsUI({page,integrationName,appName}

- `page`: Methods to interact with a single tab or extension background page in Browser
- `integrationName`: Name of an Integration

Function that exports MicroApp to desired path through UI

#### getLastTimeSync({authInstance,microappsAdminUrl,integrationName}

- `authInstance`: Authorized instance for API calls got from createAuthInstance function
- `microappsAdminUrl`: URL of Microapps Admin
- `integrationName`: Name of an Integration

Function that returns duration of last synchronization of Integration

&nbsp;
## class:workspace

#### workspace.login({page,workspaceUrl,workspaceUsername,workspacePassword,workspaceIdentityProvider})

- `page`: Methods to interact with a single tab or extension background page in Browser
- `workspaceUrl`: Workspace login page URL
- `workspaceUsername`: Username for login to Workspace
- `workspacePassword`: PAssword for login to Workspace
- `workspaceIdentityProvider`: Identity Provider that is used to store the users - <b> ad </b>/<b> aad </b>/<b> netscaler </b>/<b> okta </b>

Logins to workspace

#### workspace.skipTour({page})

- `page`: Methods to interact with a single tab or extension background page in Browser

During first user login to workspace, tutorial appears. This function skips this tutorial

#### workspace.goToActions({page})

- `page`: Methods to interact with a single tab or extension background page in Browser

Goes to the Actions page from Workspace homepage

#### workspace.startAction({page,actionName,integrationName})

- `page`: Methods to interact with a single tab or extension background page in Browser
- `actionName`: Name of the Action
- `integrationName`: Name of Integration the Action belongs to

Opens Action from Actions page

#### workspace.getFeedNotifications({page})

- `page`: Methods to interact with a single tab or extension background page in Browser

Gets list of Notifications

#### workspace.waitForFeedCardId({page,recordId[,repeatMax,waitTime,notificationId]})

- `page`: Methods to interact with a single tab or extension background page in Browser
- `recordId`: Id of feedcard's record
- `repeatMax`: Optional, max number of tries to find the Feedcard. Defaultly set on 50 tries
- `waitTime`: Optional, Time in miliseconds to wait after each try. Defaultly set on 5000 miliseconds
- `notificationId`: Optional, for distinction of feedcards with same recordId

Waits for Feedcard based on recordId. Some feedcards are generated with same recordId but have different meaning (for eample record gets created and is pushed for approval, but 2 feedcards get created - one for info that new record was created and one for record approval) and gets its ID

#### workspace.getFeedCardButton({page,feedCardId,buttonName})

- `page`: Methods to interact with a single tab or extension background page in Browser
- `feedCardId`: Id of feedcard got from waitForFeedCardId function
- `buttonName`: Text on button

Gets button on feedcard. The button will be selected by text on the button

#### workspace.waitForPopUp({page,text})

- `page`: Methods to interact with a single tab or extension background page in Browser
- `text`: Expected text

Waits for PopUp message. If the message is the same as expected, test will continue, if the PopUp has error message, error will be thrown.
