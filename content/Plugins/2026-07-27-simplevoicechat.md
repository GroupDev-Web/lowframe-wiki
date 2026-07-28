---
title: SimpleVoiceChat
draft: false
---
# Simple Voice Chat

Simple Voice Chat adds proximity voice chat to LowFrame. Players near each other can speak and listen without needing to join an external voice call.

## Who Can Use Voice Chat?

Players who want to use voice chat must install the Simple Voice Chat client mod.

Players without the client mod can still join LowFrame, but they cannot speak or hear players through Simple Voice Chat.

The client mod is available for:

- Fabric
- NeoForge
- Forge
- Quilt

Install the version that matches your Minecraft version and mod loader.

## Installing Simple Voice Chat

1. Download Simple Voice Chat from its official download page.
2. Select the version matching your Minecraft version.
3. Select your mod loader.
4. Place the downloaded `.jar` file inside your Minecraft `mods` folder.
5. Restart Minecraft.
6. Join LowFrame normally.

Do not place the client mod inside a resource-pack or shader-pack folder.

## First-Time Setup

After installing Simple Voice Chat for the first time, join a server or singleplayer world.

A setup message should appear in chat.

Press `V` to open the voice chat setup guide.

The guide will help you:

1. Select your microphone.
2. Select your speakers or headphones.
3. Choose push-to-talk or voice activation.
4. Set your push-to-talk key.
5. Test your microphone volume.

Headphones are recommended because speakers may create echoes.

## Default Controls

Every voice-chat key can be changed under:

**Options → Controls → Key Binds → Simple Voice Chat**

### Voice Chat Menu

Press `V` to open the voice chat menu.

The menu allows you to:

- Change your microphone.
- Change your speaker or headphones.
- Adjust player volumes.
- Test your microphone.
- Change your activation type.
- Open group-chat settings.
- Change voice-chat settings.

### Mute Microphone

Press `M` to mute or unmute your microphone.

This key is mainly used when voice activation is enabled.

### Disable Voice Chat

Press `N` to disable or re-enable voice chat.

When voice chat is disabled:

- Other players cannot hear you.
- You cannot hear other players.

### Hide Voice Chat Icons

Press `H` to hide or show voice-chat icons.

### Push to Talk

Push-to-talk does not have a universal default key.

You can select a key during the first-time setup or under:

**Options → Controls → Key Binds → Simple Voice Chat**

You must hold the push-to-talk key while speaking.

### Group Chat Menu

On Minecraft 1.21.6 and newer, the group-chat menu does not have a default key.

On older versions, it may use `G`.

You can assign or change the key under:

**Options → Controls → Key Binds → Simple Voice Chat**

### Whisper

The whisper key is not assigned by default.

Holding the whisper key reduces the distance at which other players can hear you.

### Recording

The recording key is not assigned by default.

Recording may also be disabled by the server.

Do not record other players without their permission.

## Proximity Voice Chat

Normal voice chat is based on distance.

Players close to you will sound louder. Players farther away will become quieter until they are outside the voice-chat range.

The server owner controls the maximum voice distance and whisper distance.

## Group Chats

Groups allow players to communicate without staying close together.

Open the voice chat menu and select the group section to:

- Create a group.
- Join a group.
- Invite players.
- Leave your current group.
- Protect a group with a password.

Groups may be:

- Open
- Password-protected
- Invite-only

## Commands

Simple Voice Chat commands can only be used in game.

You must have the client mod installed to use the commands.

### `/voicechat help`

Shows the available Simple Voice Chat commands.

### `/voicechat test <player>`

Tests a player's connection to the voice-chat server.

Example:

`/voicechat test YTRift`

This command requires:

`voicechat.admin`

### `/voicechat invite <player>`

Invites a player to your current voice group.

Example:

`/voicechat invite YTRift`

### `/voicechat join <group-name>`

Joins a voice group using its name.

Example:

`/voicechat join Staff`

This only works when there is not more than one group with the same name.

### `/voicechat join <group-id>`

Joins a voice group using its ID.

This command is normally executed automatically when accepting an invitation.

### `/voicechat leave`

Leaves your current voice group.

## Permissions

### `voicechat.listen`

Allows players to hear voice-chat audio.

This permission is granted to everyone by default.

### `voicechat.speak`

Allows players to transmit microphone audio.

This permission is granted to everyone by default.

### `voicechat.groups`

Allows players to create and join voice groups.

This permission is granted to everyone by default.

### `voicechat.admin`

Allows access to administrative voice-chat features, including `/voicechat test`.

This permission is granted to server operators by default.

# Installation for Server Owners

Simple Voice Chat must be installed on the server.

Players who want to use voice chat must also install the client mod. Players without the client mod can still join unless the server owner enables `force_voice_chat`.

## Paper, Spigot, and Bukkit Installation

1. Stop the Minecraft server.
2. Download the Simple Voice Chat Bukkit, Spigot, or Paper plugin.
3. Make sure the plugin version supports your Minecraft version.
4. Upload the plugin `.jar` file to the server's `plugins` folder.
5. Start the server.
6. Wait for Simple Voice Chat to generate its files.
7. Stop the server before editing the configuration.

The plugin file should be located in:

`plugins`

The generated server configuration is located at:

`plugins/voicechat/voicechat-server.properties`

Players must use the Fabric, NeoForge, Forge, or Quilt client mod. They do not install the Paper plugin on their computer.

## Fabric, NeoForge, Forge, or Quilt Server Installation

1. Stop the server.
2. Download the Simple Voice Chat version matching the server's mod loader.
3. Upload the `.jar` file to the server's `mods` folder.
4. Start the server once.
5. Wait for the configuration files to generate.
6. Stop the server before editing the configuration.

The server configuration is located at:

`config/voicechat/voicechat-server.properties`

## Voice Chat Port

Simple Voice Chat uses a separate UDP port for voice audio.

The default port is:

`24454 UDP`

The port must be opened as **UDP**, not TCP.

A normal Minecraft connection uses TCP, but Simple Voice Chat sends its audio over UDP.

Do not use a UDP port that is already being used by:

- Geyser
- The Minecraft query service
- Another voice-chat server
- Another game server
- Another proxy

## Hosting Provider Setup

When using a Minecraft hosting provider:

1. Open the server control panel.
2. Find the network, allocations, ports, or additional-ports section.
3. Add or request an extra UDP port.
4. Copy the assigned port number.
5. Open the Simple Voice Chat server configuration.
6. Set `port` to the assigned UDP port.
7. Save the file.
8. Restart the server.

Example:

`port=24454`

When the host gives you a different port, replace `24454` with that port.

Some server hosts require support staff to assign an additional UDP port.

## Self-Hosted Server Setup

When hosting the server yourself, open the voice-chat UDP port in:

- The computer's firewall.
- The router's port-forwarding settings.

The default port is:

`24454 UDP`

Forward the port to the local IP address of the computer running the Minecraft server.

Only the server needs the voice-chat port opened. Players do not need to forward a port.

## Basic Server Configuration

Open:

`plugins/voicechat/voicechat-server.properties`

For Fabric, NeoForge, Forge, or Quilt servers, open:

`config/voicechat/voicechat-server.properties`

Recommended basic settings:

`port=24454`

`bind_address=`

`voice_host=`

`max_voice_distance=48`

`whisper_distance=24`

`enable_groups=true`

`force_voice_chat=false`

### `port`

Controls the UDP port used by voice chat.

Default:

`port=24454`

Use the UDP port assigned by your hosting provider.

Using `port=-1` makes voice chat use the Minecraft server's port number over UDP. Using a separate port is recommended because the server query may also use UDP on the Minecraft port.

### `bind_address`

Controls which network address the voice-chat server uses.

For most servers, leave it empty:

`bind_address=`

Only change it when your hosting provider or network configuration specifically requires it.

To bind to every available network address, the configuration supports:

`bind_address=*`

Do not use this unless it is required for your setup.

### `voice_host`

Controls the hostname and port clients use to connect to voice chat.

For most servers, leave it empty:

`voice_host=`

An example custom value would be:

`voice_host=voice.example.com:24454`

Do not change this unless your network setup requires it.

### `max_voice_distance`

Controls how far normal speech can be heard.

Default:

`max_voice_distance=48`

### `whisper_distance`

Controls how far whispering can be heard.

Default:

`whisper_distance=24`

### `enable_groups`

Controls whether voice groups are enabled.

To enable groups:

`enable_groups=true`

To disable groups:

`enable_groups=false`

### `force_voice_chat`

Controls whether players without the client mod can join.

Recommended setting:

`force_voice_chat=false`

This allows players without Simple Voice Chat to join normally.

Setting it to `true` kicks players who do not have the client mod installed:

`force_voice_chat=true`

### `allow_recording`

Controls whether clients can use Simple Voice Chat's recording feature.

To allow recording:

`allow_recording=true`

To disable recording:

`allow_recording=false`

## Restarting the Server

Stop the server before changing Simple Voice Chat configuration files.

After making changes:

1. Save the configuration.
2. Start the server again.
3. Join using a client with Simple Voice Chat installed.
4. Test the connection.

Editing the configuration while the server is running may cause changes to reset.

## Testing the Connection

Join the server using a client with Simple Voice Chat installed.

An operator or player with the administrative permission can run:

`/voicechat test <player>`

Example:

`/voicechat test YTRift`

The required permission is:

`voicechat.admin`

A successful test confirms that the player's client can communicate with the voice-chat server.

Normal online port-checking websites may not correctly test Simple Voice Chat because UDP is connectionless and the application must respond correctly.

## Velocity Proxy Installation

Use this section when players connect through a Velocity proxy.

Simple Voice Chat must be installed on:

- The Velocity proxy.
- Every backend Minecraft server that should support voice chat.

### Install on Velocity

1. Stop the Velocity proxy.
2. Download the Simple Voice Chat Velocity proxy plugin.
3. Upload the plugin `.jar` file to the proxy's `plugins` folder.
4. Start the proxy once.
5. Wait for the configuration to generate.
6. Stop the proxy before editing the configuration.

The proxy configuration is located at:

`plugins/voicechat/voicechat-proxy.properties`

### Install on Backend Servers

Install the normal Simple Voice Chat plugin or mod on every backend Minecraft server.

For Paper backend servers, place the plugin in:

`plugins`

For Fabric, NeoForge, Forge, or Quilt backend servers, place the mod in:

`mods`

The proxy plugin does not replace the backend server plugin or mod.

### Backend Voice Ports

When the proxy and backend servers run on the same machine, every backend voice-chat server must use a different port.

Example:

- Lobby: `24454`
- SMP1: `24455`
- SMP2: `24456`

Set the correct port inside each backend server's:

`voicechat-server.properties`

The proxy plugin detects the backend voice-chat ports and forwards voice traffic to the correct server.

### Velocity Public UDP Port

When using the official Velocity proxy plugin, only one UDP port needs to be publicly opened for the proxy.

The default proxy setting is:

`port=-1`

This makes voice chat use the same port number as the Velocity proxy, but over UDP.

For example, when Velocity runs on:

`25577 TCP`

Voice chat uses:

`25577 UDP`

TCP and UDP are separate protocols, so they can use the same port number.

When your hosting provider assigns a separate UDP port, change the proxy configuration:

`port=24454`

### Proxy Voice Host

Most setups should leave this empty:

`voice_host=`

When clients need to connect through a different hostname or port, set it in the proxy configuration.

Example:

`voice_host=voice.example.com:24454`

When the official proxy plugin is being used, the `voice_host` value inside each backend server configuration is ignored. Set it in the proxy configuration instead.

### Testing Proxy Connections

First test a player's public voice connection with:

`/voicechat test <player>`

Newer proxy-plugin versions may also support testing the connection between the proxy and a backend server from the proxy console:

`/voicechatproxy ping <server-name> <voice-port>`

Example:

`/voicechatproxy ping smp1 24455`

The proxy needs the correct backend server name and voice-chat port.

## Permissions for Server Owners

The following permissions can be managed using LuckPerms or another supported permission plugin.

### Allow Listening

`voicechat.listen`

### Allow Speaking

`voicechat.speak`

### Allow Groups

`voicechat.groups`

### Allow Administrative Commands

`voicechat.admin`

Example LuckPerms command:

`/lp group admin permission set voicechat.admin true`

Example commands for the default group:

`/lp group default permission set voicechat.listen true`

`/lp group default permission set voicechat.speak true`

`/lp group default permission set voicechat.groups true`

These three permissions are normally granted to everyone by default.

## Server Troubleshooting

### Voice Chat Shows a Disconnected Plug

A disconnected plug normally means the client cannot reach the voice-chat UDP port.

Check that:

- The port is open as UDP.
- The configured port matches the allocated port.
- The server was restarted after changing the configuration.
- The player has the correct mod version.
- The firewall allows the UDP port.
- The router forwards the UDP port when self-hosting.
- No other program is using the port.

### Failed to Bind to Address

Leave this setting empty:

`bind_address=`

Only set a bind address when your hosting provider specifically tells you to.

### Address Already in Use

Another service is using the configured port.

Choose another unused UDP port, update the configuration, and restart the server.

### Geyser Conflict

Geyser and Simple Voice Chat both use UDP.

They must use different UDP ports.

Example:

- Geyser: `19132 UDP`
- Simple Voice Chat: `24454 UDP`

### Configuration Changes Keep Resetting

Stop the server before editing:

`voicechat-server.properties`

Save the file while the server is stopped, then start the server again.

### Players Without the Mod Are Being Kicked

Open the server configuration and set:

`force_voice_chat=false`

Restart the server afterward.

### Voice Chat Works on One Backend but Not Another

Check that:

- Simple Voice Chat is installed on every backend server.
- Every backend has a unique voice-chat port.
- The Velocity plugin is installed.
- The backend server was restarted.
- The proxy can reach the backend's voice-chat port.

## Player Troubleshooting

### Nobody Can Hear You

1. Press `V`.
2. Open the voice-chat settings.
3. Select the correct microphone.
4. Make sure your microphone is not muted.
5. Check your push-to-talk key.
6. Use the microphone test.
7. Check that Minecraft has microphone permission.

### You Cannot Hear Other Players

1. Press `V`.
2. Open the voice-chat settings.
3. Select the correct speaker or headphones.
4. Make sure voice chat is enabled.
5. Increase the master voice-chat volume.
6. Increase the volume for the affected player.

### Voice Chat Keeps Disconnecting

This can be caused by an unstable internet connection or blocked UDP traffic.

Try:

1. Leaving and rejoining LowFrame.
2. Restarting Minecraft.
3. Restarting your router.
4. Checking that the correct mod version is installed.
5. Contacting LowFrame staff if the problem continues.

## Voice Chat Rules

The normal LowFrame rules also apply to voice chat.

Do not:

- Harass or threaten other players.
- Use slurs or hateful language.
- Play extremely loud or disruptive sounds.
- Spam your microphone.
- Share private information such as your address, school, phone number, or passwords.
- Record another player without permission.
- Attempt to bypass a voice-chat mute or punishment.

Mute players who make you uncomfortable and report serious problems to LowFrame staff.