---
title: MCXboxBrodcast
draft: false
---
# MCXboxBroadcast

MCXboxBroadcast allows an existing Geyser or Bedrock server to appear as a joinable Minecraft session through an Xbox account.

Players who follow the server's Xbox account can find the server in Minecraft's **Friends** tab. This makes it easier for console players to join servers that cannot normally be added through the standard server-list menu.

MCXboxBroadcast does not replace Geyser. Geyser is still responsible for allowing Bedrock players to connect to the Java server.

# Player Guide

## Joining Through the Friends Tab

To join a server using MCXboxBroadcast:

1. Add or follow the Xbox account used by the server.

2. Open Minecraft: Bedrock Edition.

3. Select **Play**.

4. Open the **Friends** tab.

5. Look under **Joinable Friends**.

6. Select the Minecraft session shown by the server account.

7. Join the server.

The server account must be online and MCXboxBroadcast must be running for the session to appear.

## Supported Devices

MCXboxBroadcast may help players connect from Bedrock devices such as:

- Xbox

- PlayStation

- Nintendo Switch

- Windows Bedrock Edition

- Android

- iPhone and iPad

The Friends-tab behavior may differ depending on the device, Minecraft version, Xbox privacy settings, and platform restrictions.

## Server Is Not Showing

Try the following:

1. Confirm that you followed the correct Xbox account.

2. Restart Minecraft.

3. Sign out and back into your Xbox account.

4. Check the **Friends** tab again.

5. Confirm that the server is online.

6. Confirm that the broadcasting Xbox account appears online.

7. Wait a few minutes for the session to update.

The Xbox account may need to follow you back before the session appears.

## Unable to Join

When the server appears but cannot be joined, check that:

- Your Minecraft version is updated.

- The Geyser server is online.

- The Bedrock UDP port is reachable.

- Your Xbox privacy settings allow multiplayer.

- The server is not full.

- You are not blocked or banned.

- The broadcaster is advertising the correct server.

MCXboxBroadcast only advertises the server. Geyser and the network configuration still handle the actual connection.

# How MCXboxBroadcast Works

MCXboxBroadcast signs into an Xbox account and makes the configured Minecraft server appear as a joinable session.

Depending on its configuration, it can provide:

- Xbox Friends-tab joining

- Automatic friend-list management

- Server MOTD synchronization

- Server-status synchronization

- Multi-account support

- Xbox app presence

- Custom server images

- Geyser extension support

- Standalone operation

The authenticated Xbox account appears online and playing Minecraft while the broadcaster is active.

# Important Account Warning

The MCXboxBroadcast developers recommend using a separate Xbox account instead of a personal account.

The tool emulates parts of a Minecraft client. Its developers state that this may or may not conflict with Xbox or Microsoft rules, so the software is used at the server owner's own risk.

Do not use an account containing important purchases, personal messages, or valuable progress.

Never share the account password, authentication code, recovery code, or session files publicly.

# Server Setup

MCXboxBroadcast can run as:

- A Geyser extension

- A standalone Java application

- A Docker container

- A Pterodactyl server instance

The Geyser extension is normally the easiest option when Geyser is already installed.

# Geyser Extension Installation

## Requirements

The extension version requires:

- A working Geyser installation

- A compatible Java version

- A Microsoft or Xbox account for broadcasting

- Access to the Geyser extensions folder

- A reachable Bedrock server

## Download

Official downloads are available from:

[Download MCXboxBroadcast from Modrinth]([https://modrinth.com/mod/mcxboxbroadcast/versions](https://modrinth.com/mod/mcxboxbroadcast/versions))

[Download MCXboxBroadcast from GitHub]([https://github.com/MCXboxBroadcast/Broadcaster/releases](https://github.com/MCXboxBroadcast/Broadcaster/releases))

Download the file named similar to:

`MCXboxBroadcastExtension.jar`

Do not use the standalone file when installing it as a Geyser extension.

## Install on Geyser-Spigot

1. Stop the Minecraft server.

2. Open the Geyser plugin folder.

3. Open the `extensions` folder.

4. Upload `MCXboxBroadcastExtension.jar`.

5. Start the server.

6. Watch the server console for an authentication message.

7. Complete the Microsoft device-code login.

8. Restart the server when required.

9. Follow the broadcasting account on Xbox.

10. Check the Minecraft Friends tab.

The extension directory is commonly:

`plugins/Geyser-Spigot/extensions`

The exact Geyser folder name may differ between installations.

## Install on Geyser-Velocity

When Geyser is installed on Velocity, place MCXboxBroadcast in Geyser's extension directory on the proxy.

A common location is:

`plugins/Geyser-Velocity/extensions`

Steps:

1. Stop Velocity.

2. Upload `MCXboxBroadcastExtension.jar` to the Geyser extensions folder.

3. Start Velocity.

4. Watch the proxy console.

5. Complete the displayed Microsoft authentication process.

6. Restart the proxy when required.

7. Test the broadcast from a Bedrock account.

Do not place the extension directly inside Velocity's normal `plugins` folder unless the downloaded build specifically instructs you to do so.

## Authentication

During the first startup, the console displays a Microsoft device-login message and a temporary code.

Open the address displayed in the console, enter the temporary code, and sign into the Xbox account that will broadcast the server.

The code expires after a limited time. Restart MCXboxBroadcast when a new code is needed.

Only enter the code on Microsoft's official login page.

After authentication:

1. Keep the broadcaster account available.

2. Follow the account from the Bedrock player account.

3. Allow automatic following when enabled.

4. Open Minecraft's Friends tab.

5. Look for the joinable session.

# Standalone Installation

The standalone version runs separately from the Minecraft server.

Download the file named similar to:

`MCXboxBroadcastStandalone.jar`

Start it with:

`java -jar MCXboxBroadcastStandalone.jar`

During the first startup:

1. Wait for the authentication code.

2. Complete the Microsoft device login.

3. Sign into the broadcasting account.

4. Open the generated `config.yml`.

5. Enter the address and port of the target Geyser or Bedrock server.

6. Restart MCXboxBroadcast.

7. Follow the account on Xbox.

8. Test the session from Minecraft's Friends tab.

The standalone broadcaster must remain running for the server session to remain advertised.

# Docker Installation

MCXboxBroadcast provides a standalone Docker image.

Example:

`ghcr.io/mcxboxbroadcast/standalone:latest`

Example command:

`docker run --rm -it -v /path/to/config:/opt/app/config ghcr.io/mcxboxbroadcast/standalone:latest`

Replace `/path/to/config` with the folder where the MCXboxBroadcast configuration should be stored.

Persistent storage is important so the configuration and authenticated session are not lost every time the container restarts.

# Pterodactyl Installation

The MCXboxBroadcast repository provides a Pterodactyl egg named:

`egg-m-c-xbox-broadcast.json`

The egg can be imported into a Pterodactyl panel by an administrator.

After creating the server:

1. Start the MCXboxBroadcast instance.

2. Watch the console for the authentication code.

3. Complete Microsoft authentication.

4. Configure the target server address and port.

5. Restart the instance.

6. Test the Xbox Friends-tab session.

# Configuration

The generated configuration is usually named:

`config.yml`

The available settings may include:

- Target server address

- Target server port

- MOTD synchronization

- Friend synchronization

- Automatic following

- Automatic unfollowing

- Account management

- Broadcast information

- Server image settings

- Status updates

Stop or restart MCXboxBroadcast after making major configuration changes.

Use spaces instead of tab characters when editing YAML.

# Automatic Friend Management

MCXboxBroadcast can automatically follow players who follow the broadcasting account.

This allows the server to appear as a joinable friend session without staff manually adding every player.

Automatic unfollowing may also be available.

Xbox rate limits prevent the friend list from being checked continuously, so updates may take some time.

# Custom Server Image

A custom image can be displayed for the broadcasting account.

Create a JPEG file named:

`screenshot.jpg`

Place it in the same folder as:

`config.yml`

The project's recommended image settings are:

- Resolution: `1200x675`

- JPEG quality: `90`

- Chroma subsampling: `4:2:0`

The image may take several minutes to update through Xbox services.

Do not include private information in the image.

# Commands

When using the Geyser extension, commands use the prefix:

`/mcxboxbroadcast`

The standalone version accepts commands directly through its console.

## Restart the Broadcaster

Extension:

`/mcxboxbroadcast restart`

Standalone console:

`restart`

This restarts the broadcasting service.

## List Accounts

Extension:

`/mcxboxbroadcast accounts list`

Standalone console:

`accounts list`

This displays the accounts currently being used and their follower counts.

## Add an Account

Extension:

`/mcxboxbroadcast accounts add <sub-session-id>`

Standalone console:

`accounts add <sub-session-id>`

This adds an authenticated account session to the active account list.

## Remove an Account

Extension:

`/mcxboxbroadcast accounts remove <sub-session-id>`

Standalone console:

`accounts remove <sub-session-id>`

This removes an account session from the active account list.

## Dump Session Information

Extension:

`/mcxboxbroadcast dumpsession`

Standalone console:

`dumpsession`

This writes current session information to files for debugging.

Session dumps may contain sensitive authentication or account information.

Do not publish them publicly unless the project's support team specifically requests them and you have checked their contents.

## Exit the Standalone Broadcaster

Standalone console only:

`exit`

This safely stops the standalone program.

# Multi-Account Support

MCXboxBroadcast can use multiple accounts.

This may be helpful when:

- One account reaches friend limits.

- A large server needs multiple broadcast accounts.

- Different servers use different Xbox accounts.

- A network wants separate joinable sessions.

Every added account must be authenticated separately.

Protect every account and its session files.

# Recommended LowFrame Setup

Since LowFrame uses Geyser on its network, MCXboxBroadcast should normally be installed as an extension in the same Geyser installation.

A typical setup is:

- Velocity

  - Geyser

    - MCXboxBroadcast extension

  - Floodgate

  - ViaVersion

- Lobby

- SMP servers

MCXboxBroadcast advertises the Geyser connection.

Velocity decides which backend server the player reaches after connecting.

The Bedrock address and port must still work normally before MCXboxBroadcast is added.

# Security

Protect these files and details:

- Microsoft account password

- Authentication codes

- Session files

- Cached login information

- Account recovery codes

- `config.yml`

- Debug session dumps

Do not upload authenticated session files to GitHub, Discord, public file hosts, or the LowFrame Wiki.

Only trusted LowFrameMC administrators should control the broadcasting account.

# Troubleshooting

## No Authentication Code Appears

Check that:

- Geyser loaded successfully.

- The extension is inside Geyser's `extensions` folder.

- The correct extension build was downloaded.

- The server has internet access.

- The console contains an earlier MCXboxBroadcast error.

- The Java version is compatible.

- The extension is updated.

Restart Geyser and watch the console from the beginning.

## Extension Does Not Load

Check that:

- The file is named similar to `MCXboxBroadcastExtension.jar`.

- It is not still inside a ZIP file.

- It is inside the Geyser extensions directory.

- Geyser supports extensions.

- The installed build is current.

- The console does not report an incompatible API version.

## Server Does Not Appear in the Friends Tab

Check that:

- The broadcaster authenticated successfully.

- MCXboxBroadcast is still running.

- The player followed the correct Xbox account.

- Automatic following is enabled when required.

- Minecraft was restarted after following the account.

- The server information is correct.

- Xbox services are available.

- Privacy settings permit friends and multiplayer.

Allow several minutes for Xbox services to update.

## Server Appears but Cannot Be Joined

This usually means advertising works but the actual Geyser connection does not.

Check:

- Geyser's Bedrock UDP port

- Firewall rules

- Port forwarding

- Public server address

- Hosting-provider UDP support

- Geyser console errors

- Floodgate authentication

- Velocity backend routing

Test the Geyser address directly from a normal Bedrock client before troubleshooting MCXboxBroadcast.

## Wrong Server Is Advertised

Open `config.yml` and verify the target:

- Address

- Port

- MOTD

- Server information

Restart the broadcaster after saving the configuration.

## Authentication Expired

Restart MCXboxBroadcast and complete the newly displayed Microsoft device-login process.

Do not reuse an expired authentication code.

## Wrong Xbox Account Was Linked

Stop MCXboxBroadcast before changing authentication files.

Back up the configuration, remove the saved account session using the available account-management command or authenticated cache-reset procedure, and restart the broadcaster to receive a new login code.

Be careful not to delete the main configuration unintentionally.

## Friend Count Does Not Update

Friend synchronization is not instant.

Check:

- Automatic following is enabled.

- The player followed the correct account.

- Xbox privacy settings permit following.

- The account has not reached an Xbox limit.

- The console does not report Xbox rate-limit errors.

## Custom Image Does Not Appear

Check that:

- The file is named exactly `screenshot.jpg`.

- It is beside `config.yml`.

- It is a valid JPEG image.

- MCXboxBroadcast was restarted.

- Enough time has passed for Xbox services to update it.

## Commands Do Not Work

For the extension version, include:

`/mcxboxbroadcast`

Example:

`/mcxboxbroadcast accounts list`

For the standalone version, type the command directly into its console without the extension prefix.

## Updating MCXboxBroadcast

1. Stop the broadcaster.

2. Back up its configuration folder.

3. Protect any authenticated session files.

4. Download the newest compatible build.

5. Replace the old extension or standalone file.

6. Start MCXboxBroadcast.

7. Check the console for errors.

8. Reauthenticate only when requested.

9. Confirm the server appears in the Friends tab.

10. Test joining the server.

Do not delete working authentication data unless a clean login is required.