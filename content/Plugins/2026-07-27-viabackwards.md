---
title: ViaBackwards
draft: false
---
# ViaBackwards

ViaBackwards allows players using older Minecraft: Java Edition versions to connect to servers running newer Minecraft versions.

The plugin translates newer server data into formats older clients can understand.

Players do not need to install anything on their computers. ViaBackwards runs on the Minecraft server or proxy.

## What ViaBackwards Does

ViaBackwards can translate:

- Blocks and items

- Entities and mobs

- Inventory data

- Sounds and particles

- Chat components

- Scoreboards

- Player information

- Server packets

ViaBackwards does not downgrade the actual server.

The server continues using its normal:

- Minecraft version

- World generation

- Blocks and items

- Commands

- Plugins

- Combat mechanics

- Server-side features

## Player Guide

### Joining With an Older Version

Open an older supported Minecraft version and connect to the server normally.

When ViaBackwards supports the connection, it automatically translates the server data.

No client mod is required.

### Unsupported Blocks and Items

Older Minecraft clients do not contain newer blocks and items.

ViaBackwards may display a replacement that the older client understands.

For example:

- A newer block may appear as an older block.

- A newer item may use a replacement item.

- A newer mob may appear as another entity.

- A newer sound may be replaced or omitted.

- New particles may not appear correctly.

These replacements are mostly visual. The server still treats the object as its real modern version.

### Missing Features

Some modern features cannot be recreated perfectly on older clients.

Possible differences include:

- New inventory screens

- New block models

- New mobs

- New item components

- New chat features

- New particles

- New sounds

- New animations

- New movement mechanics

- Custom items

- Armor trims

- New enchantments

Using ViaBackwards does not guarantee that every server plugin supports every older Minecraft version.

### Unsupported Client Message

When an older client cannot connect, it may display:

`Outdated client!`

Possible causes include:

- ViaBackwards is not installed.

- ViaVersion is missing.

- The client version is too old.

- The client version is blocked.

- ViaVersion and ViaBackwards are incompatible.

- The proxy did not detect the backend server version.

# Installation for Server Owners

## Requirements

ViaBackwards requires:

- ViaVersion

- A supported server or proxy

- Matching ViaVersion and ViaBackwards releases

- A full restart after installation

ViaBackwards cannot operate without ViaVersion.

ViaRewind is optional. Install ViaRewind when you also want support for Minecraft 1.7 and 1.8 clients.

## Official Downloads

ViaBackwards:

`https://hangar.papermc.io/ViaVersion/ViaBackwards`

ViaVersion:

`https://hangar.papermc.io/ViaVersion/ViaVersion`

ViaRewind:

`https://hangar.papermc.io/ViaVersion/ViaRewind`

General ViaVersion downloads:

`https://viaversion.com/downloads.html`

Avoid unofficial reuploads.

## Paper, Purpur, Spigot, or Bukkit Installation

1. Stop the Minecraft server.

2. Download ViaVersion.

3. Download the matching ViaBackwards release.

4. Upload both `.jar` files to:

`plugins`

5. Start the server.

6. Check the startup console for errors.

7. Run `/plugins`.

8. Confirm ViaVersion and ViaBackwards appear in green.

9. Join using an older Minecraft client to test it.

Your plugin folder should contain files similar to:

`ViaVersion.jar`

`ViaBackwards.jar`

The filenames may also include version numbers.

## Velocity Installation

1. Stop the Velocity proxy.

2. Download ViaVersion.

3. Download the matching ViaBackwards release.

4. Upload both `.jar` files to the proxy's:

`plugins`

5. Start Velocity.

6. Check the proxy console for errors.

7. Run:

`/viaversion probe`

8. Wait for ViaVersion to detect each backend server.

9. Test joining the lobby with an older client.

10. Test switching to every backend server.

## Recommended LowFrame Setup

LowFrame uses a Velocity proxy.

Use one consistent Via installation method across the network.

### Proxy-Only Setup

Install the Via plugins on Velocity:

- ViaVersion

- ViaBackwards

- ViaRewind, when needed

Do not install duplicate Via plugins on the Paper backend servers.

Example:

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

### Backend-Only Setup

Install the complete Via stack on every Paper backend server.

Example:

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

Every backend should use matching Via plugin versions.

### Important Installation Rule

Do not accidentally install different Via plugin versions on different parts of the network.

Avoid setups such as:

- New ViaVersion with old ViaBackwards

- ViaVersion on Velocity and ViaBackwards only on Paper

- Duplicate ViaVersion files

- Snapshot ViaVersion with an incompatible release of ViaBackwards

- Old Via plugins left on one backend server

Mismatched installations commonly cause packet errors and `NoSuchMethodError` exceptions.

# ViaVersion, ViaBackwards, and ViaRewind

## ViaVersion

ViaVersion mainly allows newer clients to connect to older servers.

Example:

A newer Minecraft client connects to an older Paper server.

## ViaBackwards

ViaBackwards allows older clients to connect to newer servers.

ViaBackwards requires ViaVersion.

## ViaRewind

ViaRewind adds support for Minecraft 1.7 and 1.8 clients.

ViaRewind requires:

- ViaVersion

- ViaBackwards

Install the full stack together when supporting Minecraft 1.7 or 1.8.

# Commands

ViaBackwards does not normally provide its own separate player commands.

Administration and diagnostics are handled through ViaVersion.

## `/viaversion`

Shows ViaVersion information and available commands.

Permission:

`viaversion.admin`

## `/viaversion list`

Shows online players and the Minecraft versions they are using.

Permission:

`viaversion.admin`

Some versions also support:

`viaversion.command.list`

## `/viaversion player <player>`

Shows protocol information for a selected player.

Example:

`/viaversion player YTRift`

Permission:

`viaversion.admin`

Some versions also support:

`viaversion.command.player`

## `/viaversion probe`

Detects the Minecraft versions used by backend servers.

This is especially useful on Velocity.

Permission:

`viaversion.admin`

Some versions also support:

`viaversion.command.probe`

## `/viaversion dump`

Creates a diagnostic report for troubleshooting.

Permission:

`viaversion.admin`

Some versions also support:

`viaversion.command.dump`

Check the report before sharing it publicly.

## `/viaversion pps`

Shows player packet rates.

Permission:

`viaversion.admin`

Some versions also support:

`viaversion.command.pps`

## `/viaversion reload`

Reloads ViaVersion configuration.

Permission:

`viaversion.admin`

Some versions also support:

`viaversion.command.reload`

A full restart is recommended after updating ViaVersion or ViaBackwards.

# Permissions

Normal players do not need a ViaBackwards permission to connect using an older supported client.

## All ViaVersion Administration Commands

`viaversion.admin`

Example LuckPerms command:

`/lp group admin permission set viaversion.admin true`

## Individual Command Permissions

Depending on the installed ViaVersion release, granular permissions may include:

`viaversion.command.list`

`viaversion.command.player`

`viaversion.command.probe`

`viaversion.command.dump`

`viaversion.command.pps`

`viaversion.command.reload`

Example:

`/lp group moderator permission set viaversion.command.list true`

# Configuration

ViaBackwards generates its configuration after the first successful startup.

The configuration is normally located at:

`plugins/ViaBackwards/config.yml`

ViaVersion's main configuration is located at:

`plugins/ViaVersion/config.yml`

Stop the proxy or server before making major configuration changes.

Use spaces instead of tab characters when editing YAML.

## Blocking Older Versions

Supported versions can still be blocked through ViaVersion.

Open:

`plugins/ViaVersion/config.yml`

Find:

`block-versions`

Example that blocks clients older than Minecraft 1.20:

    block-versions:

      - "<1.20"

To avoid blocking versions through this setting:

    block-versions: []

Only allow versions that you have tested.

## Blocked-Version Message

A custom disconnect message can be configured in ViaVersion.

Example:

`block-disconnect-msg: "Please use a supported Minecraft version."`

Make sure the message matches the versions your server actually permits.

## Suppressing Warnings

ViaBackwards may print warnings when a modern feature cannot be fully translated.

Do not hide warnings while troubleshooting.

Translation warnings can help identify:

- Unsupported blocks

- Unsupported items

- Invalid entity data

- Broken text components

- Plugin packet problems

- Incompatible Via plugin versions

# Testing ViaBackwards

After installation:

1. Restart the entire network.

2. Check the Velocity and Paper consoles.

3. Confirm ViaVersion loaded.

4. Confirm ViaBackwards loaded.

5. Run `/viaversion`.

6. On Velocity, run `/viaversion probe`.

7. Join using the server's native version.

8. Join using one slightly older version.

9. Join using the oldest version you plan to support.

10. Enter the lobby.

11. Switch to every SMP server.

12. Test chat.

13. Test movement.

14. Test teleporting.

15. Test inventories.

16. Test plugin menus.

17. Test combat.

18. Test custom items.

19. Test joining after a server restart.

20. Check the console for packet errors.

Do not test only the lobby.

An older player may successfully join the lobby but disconnect when transferring to another backend server.

# Troubleshooting

## Older Clients Receive “Outdated Client”

Check that:

- ViaVersion is installed.

- ViaBackwards is installed.

- Both plugins loaded successfully.

- The two plugins use compatible releases.

- The client version is not blocked.

- The player connects through the correct proxy address.

- Velocity detected the backend server version.

On Velocity, run:

`/viaversion probe`

## `NoSuchMethodError`

An error containing:

`java.lang.NoSuchMethodError`

usually means the Via plugins are incompatible.

Fix it by:

1. Stop the entire network.

2. Check the Velocity plugin folder.

3. Check every backend plugin folder.

4. Remove all outdated ViaVersion files.

5. Remove all outdated ViaBackwards files.

6. Remove all outdated ViaRewind files.

7. Download matching current releases.

8. Install the complete stack in one chosen location.

9. Restart the proxy and every backend server.

Do not update only ViaVersion.

## `EntityTracker.addEntity` Error

An error mentioning:

`EntityTracker.addEntity`

commonly indicates that ViaVersion and ViaBackwards do not match.

Update ViaVersion and ViaBackwards together.

Also check for duplicate plugin files on the proxy and backend servers.

## ViaBackwards Appears Red

A red plugin name means it failed while loading.

Check for:

- Missing ViaVersion

- Incompatible ViaVersion release

- Unsupported server software

- Unsupported Java version

- Corrupted plugin download

- Duplicate plugin files

- An old ViaBackwards file

- Startup dependency errors

Read the first ViaBackwards error in the console.

Later errors may only be results of the original failure.

## ViaBackwards Does Not Appear in `/plugins`

Check that:

- The `.jar` is inside the correct `plugins` folder.

- The file is not still inside a ZIP archive.

- The filename does not end in `.disabled`.

- The server platform is supported.

- ViaVersion is installed.

- The server was fully restarted.

- The startup console does not report an error.

When ViaBackwards is installed on Velocity, it will not appear in a Paper server's `/plugins` list.

Check the Velocity console instead.

## Players Can Join the Lobby but Not the SMP

Check that:

- The backend server is online.

- Velocity can reach the backend.

- ViaVersion detected the backend protocol.

- `/viaversion probe` succeeds.

- The Via plugins are not installed twice.

- The Via plugins use matching versions.

- The backend server software is updated.

- Another packet plugin is not interfering.

## Packet Decoder or Encoder Errors

Packet errors may be caused by:

- Mismatched Via plugins

- Outdated Via plugins

- Outdated Velocity

- Outdated Paper

- Anti-cheat conflicts

- Tab-list plugins

- Scoreboard plugins

- Custom packet plugins

- Unsupported custom items

- Broken plugin menus

First update:

- ViaVersion

- ViaBackwards

- ViaRewind, when installed

- Velocity

- Paper

Then generate a report:

`/viaversion dump`

## Older Players See Incorrect Blocks

This is expected when a block does not exist in the player's Minecraft version.

ViaBackwards displays a replacement block that the older client understands.

The server still treats it as the real block.

## Older Players See Incorrect Items

Newer item data may not exist on older clients.

Possible results include:

- Replacement items

- Missing item models

- Missing armor trims

- Simplified item descriptions

- Missing custom components

- Different enchantment displays

Test valuable and custom items before officially supporting an older version.

## Plugin GUIs Do Not Work

A server GUI may contain items or menu features that an older client does not understand.

Check whether:

- The GUI uses new item types.

- The GUI uses custom model data.

- The plugin supports the older version.

- Clicking one item causes the disconnect.

- The menu uses modern chat components.

- The menu uses unsupported inventory types.

ViaBackwards translates Minecraft packets, but it cannot guarantee compatibility with every plugin GUI.

## Missing Sounds or Particles

Older clients may not contain newer sounds or particles.

ViaBackwards may:

- Replace them

- Simplify them

- Hide them

- Skip them

This is normally a visual or audio limitation rather than a server error.

## Anti-Cheat Problems

Anti-cheat plugins may behave differently when players use translated protocols.

Possible fixes include:

- Updating the anti-cheat

- Updating all Via plugins

- Checking the anti-cheat's ViaVersion compatibility settings

- Moving the full Via stack from Velocity to every backend

- Testing with the server's native client version

Use only one Via installation method across the network.

## Custom Items Cause Disconnects

Check whether the item uses:

- New item components

- Unsupported enchantments

- Armor trims

- Custom model data

- New potion data

- New attributes

- Newer food components

- New equipment slots

Test the item with every supported client version.

## `/viaversion probe` Shows the Wrong Version

Confirm that:

- The backend server is fully started.

- The backend address is correct.

- Velocity can ping the backend.

- The firewall is not blocking the connection.

- Velocity is updated.

- Duplicate Via plugins are not installed.

- Manual protocol settings are not incorrect.

Run the probe again after every backend has finished starting.

# Updating ViaBackwards

1. Stop the proxy or server.

2. Back up the ViaVersion configuration.

3. Back up the ViaBackwards configuration.

4. Remove the old ViaVersion `.jar`.

5. Remove the old ViaBackwards `.jar`.

6. Remove the old ViaRewind `.jar` when installed.

7. Download compatible current versions.

8. Upload the complete matching plugin stack.

9. Confirm no duplicate files remain.

10. Start the proxy or server.

11. Check the startup console.

12. Run `/viaversion`.

13. On Velocity, run `/viaversion probe`.

14. Test every supported client version.

15. Test switching between all backend servers.

Always update ViaVersion, ViaBackwards, and ViaRewind together.

Do not use the server-wide `/reload` command to update protocol plugins.

Use a full restart.