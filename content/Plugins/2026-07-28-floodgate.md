---
title: Floodgate
draft: false
---
# Floodgate

Floodgate allows Xbox Live authenticated Bedrock Edition players to join a Geyser server without owning Minecraft: Java Edition.

Floodgate works alongside Geyser.

It does not replace Geyser.

# Player Guide

Bedrock players normally join through Floodgate automatically.

No separate Floodgate account or client mod is required.

Players authenticate through their Bedrock or Xbox account.

## Bedrock Usernames

Floodgate may add a prefix to Bedrock usernames.

This prevents a Bedrock player and Java player with the same username from being treated as the same account.

The default prefix depends on the server configuration.

## Java Account Linking

Floodgate can optionally link a Bedrock account to a Java account.

Linking can allow the player to share their Java identity across supported servers.

Account linking must be enabled by the server owner.

Follow the exact instructions shown by the server when linking.

Never enter your Microsoft password into a Minecraft chat command.

# Server Setup

## Paper or Spigot

1. Stop the server.

2. Download Floodgate-Spigot.

3. Upload it to:

`plugins`

4. Start the server.

5. Open the Geyser configuration.

6. Set:

`auth-type: floodgate`

7. Restart the server.

## Velocity

For a Velocity network:

1. Stop Velocity.

2. Download Floodgate-Velocity.

3. Upload it to Velocity's:

`plugins`

4. Start Velocity.

5. Set Geyser's authentication type to:

`floodgate`

6. Restart Velocity.

7. Test a Bedrock connection.

Floodgate is normally required only on the proxy.

## Backend Floodgate Installation

Install Floodgate on backend servers when:

- A backend plugin uses the Floodgate API

- Bedrock-player detection is needed on the backend

- Improved Bedrock skin forwarding is required

For Velocity forwarding:

1. Install Floodgate on the proxy.

2. Install Floodgate on the required backend servers.

3. Enable secure Velocity player forwarding.

4. Enable Floodgate data forwarding.

5. Copy the proxy's `key.pem` file to each backend Floodgate folder.

6. Restart the entire network.

The same key must be used by the connected proxy and backends.

# Important Files

Floodgate configuration:

`plugins/floodgate/config.yml`

Encryption key:

`plugins/floodgate/key.pem`

Do not publicly share `key.pem`.

Do not upload it to a public repository.

# Authentication Configuration

Geyser must use:

`auth-type: floodgate`

When it is set to another authentication type, Bedrock players may be asked to use a Java account.

# Account Linking

Floodgate supports optional account linking.

The configuration contains a player-link section similar to:

    player-link:

      enabled: true

Disabling linking does not remove the need for normal Floodgate authentication.

Linking behavior depends on the installed Floodgate version and server configuration.

# Plugin Compatibility

Backend plugins can use Floodgate to identify Bedrock players.

Possible uses include:

- Different menus

- Different messages

- Bedrock-specific commands

- Bedrock skins

- Device information

- Input-mode checks

- Java and Bedrock account linking

Floodgate must be installed on the backend when the plugin accesses Floodgate locally there.

# Troubleshooting

## Bedrock Players Are Asked for Java Login

Check that:

- Floodgate loaded successfully

- Geyser uses `auth-type: floodgate`

- The correct Floodgate platform build is installed

- Geyser and Floodgate are installed in compatible locations

- The proxy was fully restarted

## Invalid Key or Encryption Error

The proxy and backend may have different `key.pem` files.

Copy the proxy Floodgate key to every backend Floodgate folder and restart the full network.

## Bedrock Players Lose Their Skins

Install and configure Floodgate forwarding on the required backends.

Also verify:

- Secure Velocity forwarding

- `send-floodgate-data`

- Matching `key.pem` files

- Updated Floodgate builds

## Plugins Do Not Detect Bedrock Players

Install Floodgate on the backend server where the plugin is running.

Proxy-only Floodgate may not provide its API directly to backend plugins.

## Duplicate or Incorrect Usernames

Check the configured Bedrock username prefix.

Changing the prefix after players have joined may cause plugins to treat them as different accounts.

## Updating Floodgate

1. Stop the entire network.

2. Back up Floodgate's configuration.

3. Back up `key.pem`.

4. Replace Floodgate on the proxy.

5. Replace Floodgate on configured backends.

6. Keep the matching key files.

7. Start the proxy and backends.

8. Test Bedrock login and server transfers.