---
title: ViaVersion
draft: false
---
# ViaVersion

ViaVersion allows players using newer Minecraft: Java Edition versions to connect to servers running older Minecraft versions.

Players do not need to install a client mod. Version translation happens on the server or proxy.

ViaVersion does not add newer blocks, mobs, commands, or gameplay features to an older server. It translates network packets so different client versions can connect.

## Player Guide

### Joining With Another Version

Connect to the server normally.

When the server supports your Minecraft version, ViaVersion automatically translates your connection.

No additional setup is required on your computer.

### Unsupported Version

When your version is unsupported, you may receive a message such as:

`Outdated client!`

`Outdated server!`

`You are using an unsupported Minecraft version!`

Try using a Minecraft version supported by the server.

### Missing Newer Features

Using a newer client does not upgrade the server.

For example, when joining an older server with a newer client:

- New blocks may not be available.

- New mobs may not exist.

- New crafting recipes may not work.

- New commands may not exist.

- Some items may be replaced visually.

- Some animations or sounds may differ.

The actual gameplay is controlled by the server version.

### Bedrock Edition

ViaVersion is designed for Minecraft: Java Edition protocol translation.

Bedrock players normally connect through:

- Geyser

- Floodgate

ViaVersion may still be used alongside Geyser, but it does not replace Geyser.

# Installation for Server Owners

## Requirements

ViaVersion generally requires:

- Paper, Spigot, CraftBukkit, or Velocity

- Java 17 or newer

- Access to the server or proxy file manager

- A full server restart after installation

Keep Velocity updated when installing ViaVersion on a proxy.

## Downloading ViaVersion

Official downloads are available from:

[ViaVersion Downloads]([https://viaversion.com/downloads.html](https://viaversion.com/downloads.html))

[ViaVersion on Hangar]([https://hangar.papermc.io/ViaVersion/ViaVersion](https://hangar.papermc.io/ViaVersion/ViaVersion))

Avoid unofficial reuploads.

## Paper, Spigot, and Bukkit Installation

1. Stop the server.

2. Download the latest compatible ViaVersion `.jar`.

3. Upload the file to:

`plugins`

4. Start the server.

5. Check the console for ViaVersion errors.

6. Run `/plugins`.

7. Confirm that ViaVersion appears in green.

The configuration will be generated at:

`plugins/ViaVersion/config.yml`

ViaVersion normally works without requiring major configuration changes.

## Velocity Installation

1. Stop the Velocity proxy.

2. Download the ViaVersion plugin.

3. Upload it to the proxy's:

`plugins`

4. Start Velocity.

5. Check the proxy console for errors.

6. Allow ViaVersion time to detect the protocol versions of the backend servers.

7. Run:

`/viaversion probe`

The configuration is normally located at:

`plugins/ViaVersion/config.yml`

## Proxy Installation Choices

When using Velocity, choose one of the following setups.

### Option One: Install on Velocity

Install ViaVersion and its addons only on the Velocity proxy.

Advantages:

- Only one installation needs to be updated.

- Every backend server can be covered.

- Configuration is managed from the proxy.

Possible disadvantages:

- Some anti-cheat plugins may work less accurately.

- Certain old-version visual features may behave differently.

- Translation happens before packets reach the backend server.

### Option Two: Install on Every Backend Server

Install ViaVersion and its addons on every Paper backend server.

Do not install the same Via translation stack on Velocity when using this setup.

Advantages:

- Packet translation happens closer to the backend server.

- Some anti-cheat plugins may work better.

- Old-version behavior may be more accurate.

Every backend must use compatible versions of:

- ViaVersion

- ViaBackwards

- ViaRewind

Do not use different ViaVersion builds across servers unless you have confirmed they are compatible.

## Recommended Velocity Setup

For a network with a lobby and multiple SMP servers, use one consistent method:

- Via plugins only on Velocity

or:

- Via plugins on every backend server

Do not accidentally leave old ViaVersion or ViaBackwards files on both the proxy and backend servers.

Duplicate or mismatched installations can cause packet errors and `NoSuchMethodError` crashes.

# ViaVersion Addons

## ViaVersion

ViaVersion allows newer clients to connect to older server versions.

Example:

A newer client connects to an older Paper server.

Download:

[ViaVersion]([https://hangar.papermc.io/ViaVersion/ViaVersion](https://hangar.papermc.io/ViaVersion/ViaVersion))

## ViaBackwards

ViaBackwards allows older clients to connect to newer server versions.

ViaBackwards requires ViaVersion.

Download:

[ViaBackwards]([https://hangar.papermc.io/ViaVersion/ViaBackwards](https://hangar.papermc.io/ViaVersion/ViaBackwards))

Install ViaBackwards in the same location as ViaVersion.

For example, when ViaVersion is installed on Velocity, install ViaBackwards on Velocity too.

When ViaVersion is installed on every backend server, install ViaBackwards on every backend server too.

## ViaRewind

ViaRewind extends support to Minecraft 1.7 and 1.8 clients connecting to newer servers.

ViaRewind requires:

- ViaVersion

- ViaBackwards

Download:

[ViaRewind]([https://hangar.papermc.io/ViaVersion/ViaRewind](https://hangar.papermc.io/ViaVersion/ViaRewind))

Install all three in the same plugin location:

- ViaVersion

- ViaBackwards

- ViaRewind

## Example Version Stack

To allow newer clients to connect to an older server:

- ViaVersion

To allow older clients to connect to a newer server:

- ViaVersion

- ViaBackwards

To additionally allow Minecraft 1.7 and 1.8 clients:

- ViaVersion

- ViaBackwards

- ViaRewind

## Important Addon Rule

Keep every Via plugin updated together.

Do not update only ViaVersion while leaving an old ViaBackwards or ViaRewind build installed.

Version mismatches can cause startup errors, packet errors, or players being disconnected.

# Commands

## `/viaversion`

Shows the installed ViaVersion version and available subcommands.

Permission:

`viaversion.admin`

A newer ViaVersion build may also support:

`viaversion.command.viaversion`

## `/viaversion list`

Lists connected players and the Minecraft versions they are using.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.list`

## `/viaversion player <player>`

Shows detailed protocol information for a player.

Example:

`/viaversion player YTRift`

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.player`

## `/viaversion pps`

Shows players and their current packets per second.

This can help identify unusually high packet usage.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.pps`

## `/viaversion probe`

Checks the protocol versions of backend servers.

This command is mainly used on Velocity.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.probe`

## `/viaversion reload`

Reloads the ViaVersion configuration.

Some settings still require a full restart.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.reload`

A full restart is safer than repeatedly reloading ViaVersion.

## `/viaversion dump`

Creates a diagnostic report containing information useful for troubleshooting.

The command returns a link that can be shared with ViaVersion support.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.dump`

Do not share a dump publicly without checking what information it contains.

## `/viaversion debug`

Enables or disables ViaVersion debugging.

Only use this when troubleshooting or when instructed by ViaVersion support.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.debug`

Debug mode may produce a large amount of console output.

## `/viaversion autoteam`

Toggles ViaVersion's automatic team handling.

This is mainly related to older Minecraft versions and player collision.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.autoteam`

## `/viaversion dontbugme`

Toggles update notifications.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.dontbugme`

Keeping update notifications enabled is recommended.

## `/viaversion displayleaks`

Enables Netty resource-leak detection.

Only use this for advanced troubleshooting.

Permission:

`viaversion.admin`

Granular permission:

`viaversion.command.displayleaks`

This may affect performance and produce additional console output.

# Permissions

## All Administrative Commands

`viaversion.admin`

This grants access to every ViaVersion administration command.

Only give this to trusted administrators.

Example LuckPerms command:

`/lp group admin permission set viaversion.admin true`

## Individual Command Permissions

Newer ViaVersion releases support:

`viaversion.command.<subcommand>`

Examples:

`viaversion.command.list`

`viaversion.command.player`

`viaversion.command.pps`

`viaversion.command.probe`

`viaversion.command.reload`

`viaversion.command.dump`

`viaversion.command.debug`

Example:

`/lp group moderator permission set viaversion.command.list true`

Another example:

`/lp group moderator permission set viaversion.command.player true`

Normal players do not need ViaVersion permissions to connect using supported versions.

# Configuration

The main configuration is located at:

`plugins/ViaVersion/config.yml`

Use spaces instead of tab characters when editing YAML.

Stop the server or proxy before making large changes.

## Update Checking

Recommended setting:

`check-for-updates: true`

This allows ViaVersion to notify administrators when a newer build is available.

## Show Supported Versions

Setting:

`send-supported-versions: false`

This controls whether ViaVersion includes additional supported-version information in server-list responses.

Most servers can leave this disabled.

## Blocking Versions

ViaVersion can block selected Minecraft client versions.

Example:

    block-versions:

      - "<1.20"

      - "1.20.1"

This example blocks versions below 1.20 and also blocks 1.20.1.

A simpler format may also be used:

`block-versions: ["<1.20"]`

## Block Message

Example:

`block-disconnect-msg: "Please use Minecraft 1.20 or newer."`

This message appears when a player joins with a blocked version.

## Blocking Protocol Numbers

ViaVersion can also block protocol numbers:

`block-protocols: []`

Using version names through `block-versions` is normally easier to understand.

## Packet Limiter

ViaVersion includes a packet limiter.

Default maximum:

`max-pps: 800`

A player exceeding the configured limit may be disconnected.

Do not disable the limiter unless you understand the security and performance effects.

To disable the maximum packet limit:

`max-pps: -1`

To disable the tracking-period limiter:

`tracking-period: -1`

It is usually better to investigate why players are reaching the limit before disabling it.

## Packet Kick Message

Example:

`max-pps-kick-msg: "You are sending too many packets!"`

`%pps` may be used in supported messages to display the player's packet rate.

## Suppress Conversion Warnings

Setting:

`suppress-conversion-warnings: false`

Enabling this hides some block, item, biome, and protocol conversion warnings.

Leave warnings visible while troubleshooting.

## Velocity Server Detection

Velocity detects backend server protocol versions by pinging them.

ViaVersion may take a short time after startup to detect every backend.

Run:

`/viaversion probe`

when a backend version is not detected correctly.

The configuration may contain settings such as:

`velocity-ping-interval`

and:

`velocity-servers`

Avoid manually changing protocol numbers unless automatic detection is failing.

# Recommended LowFrame Setup

For a Velocity network, keep the same Via plugin versions everywhere they are installed.

A possible proxy-only setup is:

- Velocity

  - ViaVersion

  - ViaBackwards

  - ViaRewind

- Lobby

  - No Via plugins

- SMP1

  - No Via plugins

- SMP2

  - No Via plugins

A possible backend-only setup is:

- Velocity

  - No Via plugins

- Lobby

  - ViaVersion

  - ViaBackwards

  - ViaRewind

- SMP1

  - ViaVersion

  - ViaBackwards

  - ViaRewind

- SMP2

  - ViaVersion

  - ViaBackwards

  - ViaRewind

Do not mix an outdated ViaBackwards build on one server with a newer ViaVersion build on another.

# Testing ViaVersion

After installation:

1. Restart the server or proxy.

2. Check the startup console.

3. Confirm every Via plugin loaded successfully.

4. Run `/viaversion`.

5. Run `/viaversion list`.

6. On Velocity, run `/viaversion probe`.

7. Join using the server's native Minecraft version.

8. Join using one newer client version.

9. When using ViaBackwards, test an older client version.

10. Switch between every backend server.

11. Test inventories, chat, movement, combat, and teleporting.

Do not assume the setup works only because the player can reach the lobby.

Test moving from the lobby to every backend server.

# Troubleshooting

## Outdated Server

When a newer client receives `Outdated Server`:

- Confirm ViaVersion loaded successfully.

- Confirm the plugin is installed in the correct location.

- Update ViaVersion.

- Update Velocity.

- Check that the player is connecting through the correct proxy address.

- Run `/viaversion probe` on Velocity.

- Check the startup console for errors.

## Outdated Client

When an older client receives `Outdated Client`:

- Install ViaBackwards.

- Make sure ViaBackwards matches the ViaVersion build.

- Install ViaRewind when supporting Minecraft 1.7 or 1.8.

- Restart the proxy or server.

- Check whether the version is blocked in `config.yml`.

## `NoSuchMethodError`

An error similar to:

`java.lang.NoSuchMethodError`

usually means ViaVersion, ViaBackwards, ViaRewind, or another protocol plugin is using incompatible versions.

Fix it by:

1. Stop the proxy and backend servers.

2. Find every ViaVersion, ViaBackwards, and ViaRewind `.jar`.

3. Remove old and duplicate builds.

4. Download matching current releases.

5. Install the complete matching set in one chosen location.

6. Restart the entire network.

Do not update only one Via plugin.

## `EntityTracker.addEntity` Error

An error mentioning:

`EntityTracker.addEntity`

commonly indicates a ViaVersion and ViaBackwards version mismatch.

Update both plugins together.

Also check every proxy and backend `plugins` folder for duplicate Via files.

## Players Can Join the Lobby but Not an SMP

Check that:

- The SMP server is online.

- ViaVersion correctly detected the SMP protocol.

- `/viaversion probe` completes successfully.

- The proxy and backend are not running conflicting Via builds.

- ViaBackwards and ViaRewind match ViaVersion.

- The backend is using a supported Minecraft server build.

## Velocity Detects the Wrong Version

Run:

`/viaversion probe`

Wait for ViaVersion to ping every backend server.

Also confirm:

- The backend address is correct.

- The backend responds to the proxy.

- Velocity is updated.

- Firewall rules are not blocking the connection.

- The backend server is fully started.

## Packet Errors

When players receive packet or decoder errors:

1. Update ViaVersion.

2. Update ViaBackwards.

3. Update ViaRewind.

4. Update Velocity or Paper.

5. Temporarily remove other protocol-altering plugins.

6. Test with the server's native Minecraft version.

7. Generate a dump using `/viaversion dump`.

8. Check the console for the first error, not only the final disconnect.

Plugins that modify packets may conflict with ViaVersion.

## New Blocks Cannot Be Used

This is expected when the server itself is older.

ViaVersion does not add new server-side gameplay content.

Upgrade the actual Paper server version when you need newer blocks, mobs, items, or mechanics.

## Tab Names Lost Their Colors

Try:

`/viaversion autoteam`

ViaVersion's automatic team handling can conflict with some tab-list, nickname, or scoreboard plugins.

Test after restarting the server.

## Players Are Kicked During Reload

Avoid the server-wide:

`/reload`

ViaVersion and protocol-related plugins should be updated with a full restart.

Some setups intentionally disconnect players during a reload to prevent crashes.

## High Packet Rate

Run:

`/viaversion pps`

Check whether one player has an unusually high packet rate.

High packet usage can be caused by:

- A modified client

- Network lag

- A broken plugin

- Rapid server corrections

- A protocol translation issue

Do not immediately disable packet limiting without investigating.

## Anti-Cheat Problems

When ViaVersion is installed only on Velocity, some anti-cheat plugins running on backend servers may receive already-translated packets.

Possible fixes include:

- Installing ViaVersion on every backend instead of the proxy

- Updating the anti-cheat

- Updating every Via plugin

- Checking the anti-cheat's ViaVersion compatibility options

Use only one Via installation method across the network.

## The Plugin Does Not Appear in `/plugins`

Check that:

- The `.jar` is in the correct `plugins` folder.

- Java 17 or newer is installed.

- The file is a server plugin build.

- The server platform is supported.

- The plugin filename does not end in `.disabled`.

- The startup console does not report a Java or dependency error.

## ViaVersion Appears Red

A red plugin name normally means it failed during startup.

Read the first ViaVersion error in the console.

Common causes include:

- Unsupported Java version

- Unsupported server build

- Damaged plugin download

- Duplicate ViaVersion files

- Incompatible ViaBackwards version

- Incompatible ViaRewind version

- Outdated proxy software

# Updating ViaVersion

1. Stop the proxy or server.

2. Back up `plugins/ViaVersion`.

3. Remove the old ViaVersion `.jar`.

4. Download the latest release.

5. Update ViaBackwards at the same time.

6. Update ViaRewind at the same time.

7. Confirm that no duplicate old files remain.

8. Start the server or proxy.

9. Check the startup console.

10. Run `/viaversion`.

11. Run `/viaversion probe` when using Velocity.

12. Test every supported client version.

Do not use a plugin manager to unload and replace ViaVersion while players are connected.

A full restart is recommended after every ViaVersion update.