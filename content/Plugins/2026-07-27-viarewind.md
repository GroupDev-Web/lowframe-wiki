---
title: ViaRewind
draft: false
---
# ViaRewind

ViaRewind allows Minecraft Java Edition 1.7.x and 1.8.x clients to connect to servers running newer Minecraft versions.

ViaRewind works with ViaVersion and ViaBackwards to translate older Minecraft network protocols.

Players do not need to install ViaRewind on their computers. The plugin runs on the Minecraft server or proxy.

## What ViaRewind Does

ViaRewind provides support for:

- Minecraft 1.8.x clients

- Minecraft 1.7.x clients

- Newer Paper servers

- Velocity networks

- Waterfall and BungeeCord networks

- Other supported ViaVersion platforms

ViaRewind only translates the connection.

It does not turn the server into Minecraft 1.8 or 1.7.

The server still uses its normal:

- Blocks

- Items

- Mobs

- Commands

- Combat system

- World generation

- Plugin behavior

## Player Guide

### Joining With Minecraft 1.8

Open Minecraft 1.8.x and connect to the server normally.

ViaRewind automatically translates the connection.

No client mod is required.

### Joining With Minecraft 1.7

Open Minecraft 1.7.x and connect normally.

Some newer server features may not display or behave correctly because Minecraft 1.7 does not understand them.

### Newer Blocks and Items

Blocks and items added after the player's Minecraft version may be replaced with older-looking alternatives.

For example:

- A newer block may appear as wool, stone, or another supported block.

- New items may appear as older substitute items.

- New mobs may appear as older mob types.

- New sounds may be changed or may not play.

- New particles may be replaced or hidden.

These replacements are visual translations. The actual server still uses the newer block or item.

### Combat Differences

Minecraft 1.8 and older clients do not contain the normal modern attack-cooldown interface.

ViaRewind may emulate parts of newer combat, but combat may still feel different from the server's native version.

The server's plugins and combat configuration decide how damage is calculated.

### Unsupported Features

Some features cannot be perfectly translated to older clients.

Possible differences include:

- Shields

- Elytra

- Off-hand items

- New inventory menus

- New block shapes

- New entity animations

- Swimming

- Crawling

- New sound effects

- New particles

- Newer chat features

The ability to connect does not guarantee that every newer feature will behave exactly like it does on a modern client.

# Installation for Server Owners

## Requirements

ViaRewind requires:

- ViaVersion

- ViaBackwards

- ViaRewind

- Java 17 or newer for current standard builds

- A supported server or proxy platform

All three Via plugins should be updated together.

The required stack is:

- ViaVersion

- ViaBackwards

- ViaRewind

Do not install ViaRewind by itself.

## Downloads

Official ViaVersion downloads:

`https://viaversion.com/downloads.html`

Official ViaRewind Hangar page:

`https://hangar.papermc.io/ViaVersion/ViaRewind`

Official ViaRewind source and releases:

`https://github.com/ViaVersion/ViaRewind`

Avoid unofficial plugin reuploads.

## Paper, Purpur, Spigot, or Bukkit Installation

1. Stop the Minecraft server.

2. Download ViaVersion.

3. Download ViaBackwards.

4. Download ViaRewind.

5. Upload all three `.jar` files to:

`plugins`

6. Start the server.

7. Check the server console for errors.

8. Run `/plugins`.

9. Confirm all three Via plugins appear in green.

10. Test the server using a Minecraft 1.8 client.

The plugin folder should contain files similar to:

`ViaVersion.jar`

`ViaBackwards.jar`

`ViaRewind.jar`

The exact filenames include their version numbers.

## Velocity Installation

When players connect through Velocity, ViaRewind can be installed on the proxy.

1. Stop the Velocity proxy.

2. Download ViaVersion.

3. Download ViaBackwards.

4. Download ViaRewind.

5. Upload all three files to the proxy's:

`plugins`

6. Start Velocity.

7. Check the proxy console for errors.

8. Run:

`/viaversion probe`

9. Wait for ViaVersion to detect every backend server.

10. Test switching from the lobby to every backend server using Minecraft 1.8.

## Recommended LowFrame Setup

LowFrame uses a Velocity proxy.

When the Via plugins are installed on Velocity, place all three on the proxy:

- ViaVersion

- ViaBackwards

- ViaRewind

Do not also keep another ViaVersion stack on the lobby, SMP1, or SMP2 unless the entire network has intentionally been configured to translate on the backend servers.

A proxy-only setup would look like:

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

A backend-only setup would look like:

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

Use one installation method consistently.

Do not accidentally install an old ViaBackwards or ViaRewind build on one part of the network.

## Installation Location

Install ViaVersion, ViaBackwards, and ViaRewind together in the same location.

When using Velocity:

`Velocity/plugins`

When using Paper:

`Paper/plugins`

Do not install ViaVersion on Velocity while installing only ViaRewind on Paper.

The complete translation stack should remain together.

# Commands

ViaRewind does not normally provide a separate set of player commands.

Administration and diagnostics use ViaVersion's commands.

## `/viaversion`

Shows ViaVersion information and available administrative commands.

Permission:

`viaversion.admin`

## `/viaversion list`

Shows online players and the Minecraft versions they are using.

Permission:

`viaversion.admin`

## `/viaversion player <player>`

Shows protocol information for a player.

Example:

`/viaversion player YTRift`

Permission:

`viaversion.admin`

## `/viaversion probe`

Checks the Minecraft protocol version of every backend server.

This is especially useful on Velocity.

Permission:

`viaversion.admin`

## `/viaversion dump`

Creates a diagnostic report that can be shared with ViaVersion support.

Permission:

`viaversion.admin`

## `/viaversion reload`

Reloads ViaVersion configuration.

Permission:

`viaversion.admin`

A full restart is recommended after updating ViaVersion, ViaBackwards, or ViaRewind.

# Permissions

Normal players do not need a ViaRewind permission to connect with Minecraft 1.7 or 1.8.

Administrative Via commands use:

`viaversion.admin`

Example LuckPerms command:

`/lp group admin permission set viaversion.admin true`

Some ViaVersion versions also support individual command permissions.

Examples:

`viaversion.command.list`

`viaversion.command.player`

`viaversion.command.probe`

`viaversion.command.dump`

`viaversion.command.reload`

Example:

`/lp group moderator permission set viaversion.command.list true`

# ViaRewind Legacy Support

ViaRewind Legacy Support is an optional addon for Paper-based backend servers.

It adds extra fixes and behavior for Minecraft 1.7 and 1.8 players.

Official page:

`https://hangar.papermc.io/ViaVersion/ViaRewindLegacySupport`

## Important Proxy Warning

ViaRewind Legacy Support is a Paper or Spigot plugin.

It does not work when it is installed only on Velocity.

When ViaRewind runs on Velocity but you want the Legacy Support features, install ViaRewind Legacy Support on each Paper backend server where those fixes are needed.

Do not place ViaRewind Legacy Support inside the Velocity plugin folder.

## Installing ViaRewind Legacy Support

1. Stop the Paper server.

2. Download ViaRewind Legacy Support.

3. Upload it to the backend server's:

`plugins`

4. Start the backend server.

5. Wait for its configuration to generate.

6. Check the console for errors.

Install it separately on every Paper backend that needs the additional fixes.

## Legacy Support Features

ViaRewind Legacy Support can improve older-client behavior involving:

- Lily pad collision

- Ladder collision

- Enchantment tables

- Brewing stands

- Block-placement sounds

- Item-pickup sounds

- Elytra movement for old clients

- Slime-block bouncing

- Area-effect cloud visibility

These features are optional and are separate from the main ViaRewind plugin.

# Configuration

ViaRewind normally works without major configuration changes.

Configuration files are generated after the first successful startup.

Depending on the platform, the configuration may be found inside:

`plugins/ViaRewind`

Stop the server or proxy before making major changes.

Use spaces instead of tabs when editing YAML files.

## Version Blocking

ViaRewind itself adds support for 1.7 and 1.8, but ViaVersion can still be configured to block selected versions.

Check:

`plugins/ViaVersion/config.yml`

Look for:

`block-versions`

Example that blocks Minecraft versions below 1.8:

    block-versions:

      - "<1.8"

This would allow Minecraft 1.8 while preventing Minecraft 1.7 clients from joining.

Example that permits both 1.7 and 1.8:

    block-versions: []

Check that older versions are not blocked when testing ViaRewind.

## Blocked-Version Message

A custom message can be configured in ViaVersion.

Example:

`block-disconnect-msg: "Please use Minecraft 1.8 or newer."`

Make sure the message matches the versions your server actually supports.

# Testing ViaRewind

After installation:

1. Restart the entire server network.

2. Check the proxy and backend console logs.

3. Confirm ViaVersion loaded.

4. Confirm ViaBackwards loaded.

5. Confirm ViaRewind loaded.

6. Run `/viaversion`.

7. On Velocity, run `/viaversion probe`.

8. Join with the server's native Minecraft version.

9. Join with Minecraft 1.8.9.

10. Join with Minecraft 1.7.10 if it is allowed.

11. Switch between every backend server.

12. Test chat.

13. Test movement.

14. Test inventories.

15. Test combat.

16. Test teleportation.

17. Test joining and leaving.

18. Test plugin menus.

19. Test custom items.

20. Check the console for packet errors.

Test more than only the lobby.

A player may successfully join the lobby but disconnect when moving to an SMP server with an incompatible Via plugin setup.

# Troubleshooting

## Minecraft 1.8 Says Outdated Client

Check that:

- ViaVersion is installed.

- ViaBackwards is installed.

- ViaRewind is installed.

- All three plugins loaded successfully.

- Minecraft 1.8 is not blocked in ViaVersion's configuration.

- The player is connecting through the correct proxy address.

- The proxy detected the backend's version.

On Velocity, run:

`/viaversion probe`

## Minecraft 1.7 Says Outdated Client

Check everything required for Minecraft 1.8.

Also confirm that Minecraft 1.7 is not blocked by:

`block-versions`

Some servers intentionally allow 1.8 but block 1.7 because 1.7 has more compatibility limitations.

## `NoSuchMethodError`

An error containing:

`java.lang.NoSuchMethodError`

normally means the installed Via plugins are incompatible with one another.

Fix it by:

1. Stop the entire network.

2. Check every proxy and backend `plugins` folder.

3. Delete old ViaVersion files.

4. Delete old ViaBackwards files.

5. Delete old ViaRewind files.

6. Download current compatible versions of all three.

7. Install the complete set in one chosen layer.

8. Restart the entire network.

Do not update only ViaVersion while leaving older ViaBackwards and ViaRewind versions installed.

## ViaRewind Does Not Appear in `/plugins`

Check that:

- The `.jar` is inside the correct `plugins` folder.

- The server uses a supported platform.

- The server has the required Java version.

- ViaVersion is installed.

- ViaBackwards is installed.

- The plugin download is not damaged.

- The startup console does not report a dependency error.

## Players Can Join the Lobby but Not an SMP

Check that:

- Every backend server is online.

- Velocity detected every backend protocol version.

- The Via plugins are not duplicated on both proxy and backend.

- Every Via plugin is updated.

- No backend contains an old ViaRewind `.jar`.

- The player is not being blocked by an anti-cheat or authentication plugin.

Run:

`/viaversion probe`

Then test the connection again.

## Packet or Decoder Errors

Packet errors can be caused by:

- Incompatible Via plugin versions

- Outdated Velocity

- Outdated Paper

- Protocol-altering plugins

- Anti-cheat conflicts

- Tab-list plugins

- Scoreboard plugins

- Custom packet plugins

- Broken custom items

- Unsupported older-client behavior

Update the full Via stack first.

Then create a diagnostic report:

`/viaversion dump`

## Older Players See Incorrect Blocks

This is expected for blocks that do not exist in Minecraft 1.7 or 1.8.

ViaRewind must replace unsupported blocks with something the older client understands.

This is normally only a visual difference.

## Missing Sounds or Particles

Some modern sounds and particles do not exist in older Minecraft clients.

ViaRewind may:

- Replace them

- Hide them

- Translate them to a similar effect

ViaRewind Legacy Support can improve some Paper-side sounds and interactions.

## Inventory Menus Look Wrong

Newer inventory types may need to be represented using older menus.

Check whether:

- The menu comes from a custom plugin.

- The plugin officially supports Minecraft 1.8.

- Custom model data is being used.

- Newer item types appear in the menu.

- The client disconnects when clicking a specific item.

The ability to join through ViaRewind does not guarantee that every plugin GUI supports Minecraft 1.8.

## Anti-Cheat Problems

Some anti-cheat systems handle translated older-client packets differently.

When translation happens on Velocity, a backend anti-cheat receives packets after proxy translation.

Possible fixes include:

- Updating the anti-cheat

- Updating ViaVersion

- Updating ViaBackwards

- Updating ViaRewind

- Checking the anti-cheat's ViaVersion support

- Moving the complete Via stack from the proxy to every backend

Do not split the three Via plugins between the proxy and backend servers.

## Minecraft 1.7 Client Crashes

Try:

- Lowering the client's render distance.

- Removing unsupported client mods.

- Testing a clean Minecraft 1.7.10 profile.

- Updating ViaRewind.

- Checking whether the crash occurs on every backend.

- Checking the server console at the exact time of the crash.

Minecraft 1.7 has stricter limits than newer versions and may not handle every modern server feature.

## Commands Work on Modern Versions but Not 1.8

The command may come from another plugin that does not support older clients.

Check:

- Command suggestions

- Plugin menus

- Clickable chat components

- Modern chat formatting

- Unsupported characters

- Custom resource-pack items

ViaRewind translates the Minecraft protocol but does not automatically add old-version support to every plugin.

# Updating ViaRewind

1. Stop the proxy or backend servers.

2. Back up the ViaVersion configuration.

3. Remove the old ViaVersion `.jar`.

4. Remove the old ViaBackwards `.jar`.

5. Remove the old ViaRewind `.jar`.

6. Download current compatible builds of all three.

7. Upload them to the same plugin location.

8. Confirm no duplicate old files remain.

9. Start the server or proxy.

10. Check the startup console.

11. Run `/viaversion`.

12. On Velocity, run `/viaversion probe`.

13. Test Minecraft 1.8.9.

14. Test Minecraft 1.7.10 if supported.

15. Test moving between every backend server.

Always update ViaVersion, ViaBackwards, and ViaRewind together.

Do not use a plugin manager to unload and replace protocol plugins while players are connected.

Use a full restart.