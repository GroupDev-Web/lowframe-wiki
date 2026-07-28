---
title: DeluxeHub
draft: false
---
# DeluxeHub

DeluxeHub manages features commonly used in a Minecraft lobby or hub server.

It combines multiple lobby features into one plugin.

# Features

Depending on configuration, DeluxeHub can provide:

- Join messages

- Welcome titles

- Scoreboards

- Tab lists

- Server-selector items

- Player-visibility items

- Lobby protection

- Double jump

- Launch pads

- Anti-void teleportation

- Anti-hunger

- Anti-damage

- Disabled block breaking

- Disabled item dropping

- Disabled inventory movement

- Custom lobby menus

- Announcements

- World-based settings

# Player Guide

## Lobby Items

Players may receive configured items when joining the lobby.

Possible items include:

- Server selector

- Player visibility toggle

- Lobby menu

- Profile item

- Cosmetics menu

- Information book

Right-click an item to use it.

## Player Visibility

The player-visibility item may switch between modes such as:

- Show all players

- Show staff or friends

- Hide players

The available modes depend on the configuration.

## Scoreboard

Players may be able to toggle the lobby scoreboard using:

`/scoreboard`

The command can be disabled or renamed depending on the server setup.

## Double Jump

When enabled, press the jump button twice while in the air to launch forward.

Double jump may be disabled in selected worlds or areas.

## Launch Pads

Launch pads propel players in a configured direction.

They are commonly created using pressure plates or other configured blocks.

# Server Setup

## Installation

1. Stop the lobby server.

2. Download DeluxeHub.

3. Upload it to:

`plugins`

4. Install PlaceholderAPI when placeholders are needed.

5. Start the server.

6. Check the console.

7. Run:

`/plugins`

8. Confirm DeluxeHub appears in green.

DeluxeHub should normally be installed on the lobby Paper server, not on Velocity.

## Configuration Files

Files are stored inside:

`plugins/DeluxeHub`

Common configuration areas include:

- Main plugin settings

- Scoreboard

- Tab list

- Join items

- Menus

- Announcements

- Messages

- World settings

File names may vary between DeluxeHub versions.

# Commands

## Help

`/deluxehub help`

Permission:

`deluxehub.command.help`

## Reload

`/deluxehub reload`

Permission:

`deluxehub.command.reload`

A full restart is recommended after updating the plugin.

## Toggle Scoreboard

`/scoreboard`

Permission:

`deluxehub.command.scoreboard`

## Open a Configured Menu

`/openmenu <menu>`

Permission:

`deluxehub.command.openmenu`

Menu names depend on the server configuration.

# PlaceholderAPI

PlaceholderAPI can display data such as:

- Player name

- Online-player count

- Server name

- Rank

- Prefix

- Balance

- Ping

- Current world

Example placeholders depend on installed expansions.

Install an expansion using PlaceholderAPI commands when required.

# Lobby Protection

DeluxeHub can prevent:

- Block breaking

- Block placing

- Damage

- Hunger

- Item dropping

- Item pickup

- Inventory movement

- Weather changes

- Mob spawning

- Void deaths

Staff may require bypass permissions to build or test in the lobby.

Temporarily disable protection or use a dedicated building world when editing the lobby.

# Server Selector

A server-selector item can open a menu containing backend servers.

The menu may execute proxy transfer commands when clicked.

Confirm that:

- The backend name matches Velocity's configuration

- The backend is online

- Plugin messaging is enabled

- The player has permission to use the item

# Troubleshooting

## Players Cannot Build

Lobby protection is probably enabled.

Temporarily disable the relevant protection setting while building.

Do not leave lobby protection disabled after finishing.

## Join Items Do Not Appear

Check:

- The join-item feature is enabled

- The item uses a valid material

- The slot is between `0` and `8`

- Another plugin is not clearing the inventory

- The player is in an enabled world

## Server Selector Does Not Transfer Players

Check:

- The Velocity backend name

- The configured transfer action

- Proxy plugin messaging

- The backend server status

- Whether another plugin intercepts the command

## Scoreboard Flickers

Check for another scoreboard plugin.

Only one plugin should normally control the same scoreboard.

## Players Spawn in the Wrong Location

DeluxeHub may conflict with:

- EssentialsXSpawn

- Multiverse

- World spawn settings

- Proxy fallback behavior

- Another lobby plugin

Choose one plugin to control the join location.

## Updating DeluxeHub

1. Stop the lobby server.

2. Back up `plugins/DeluxeHub`.

3. Replace the plugin file.

4. Start the server.

5. Review configuration migration messages.

6. Test join items.

7. Test the scoreboard.

8. Test lobby protection.

9. Test server transfers.