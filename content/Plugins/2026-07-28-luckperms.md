---
title: LuckPerms
draft: false
---
# LuckPerms

LuckPerms manages ranks, groups, permissions, prefixes, suffixes, and temporary access.

A permission decides whether a player is allowed to use a command or feature.

# Permission Values

A permission can be:

- `true` — allowed

- `false` — denied

- Undefined — not directly set

Permissions normally use periods.

Example:

`essentials.fly`

Another example:

`EconomyShopGUI.shop`

# Groups

Groups are used to give the same permissions to multiple players.

Example groups include:

- default

- member

- vip

- moderator

- admin

- owner

Players inherit permissions from their assigned groups.

# Player Guide

Normal players do not need to use LuckPerms commands.

Staff members use LuckPerms to manage access to server features.

A player's rank may control:

- Commands

- Prefixes

- Shop categories

- Staff tools

- Flight

- Homes

- Crates

- Menus

- Server access

# Server Setup

## Installation

1. Stop the server or proxy.

2. Download the correct LuckPerms version.

3. Upload it to:

`plugins`

4. Start the server or proxy.

5. Run:

`/lp info`

6. Confirm LuckPerms loaded successfully.

LuckPerms can run on:

- Paper

- Spigot

- Velocity

- BungeeCord

- Other supported platforms

For a network, install LuckPerms on every platform where permissions need to be checked.

## Web Editor

Run:

`/lp editor`

LuckPerms creates a temporary editor link.

Open the link, edit permissions, and save the changes.

The editor provides a command that must be copied back into Minecraft or the console to apply the changes.

Do not share an active editor link with untrusted people.

# User Commands

## View User Information

`/lp user <player> info`

Example:

`/lp user ExamplePlayer info`

## Give a Permission

`/lp user <player> permission set <permission> true`

Example:

`/lp user ExamplePlayer permission set essentials.fly true`

## Deny a Permission

`/lp user <player> permission set <permission> false`

Example:

`/lp user ExamplePlayer permission set essentials.fly false`

## Remove a Permission

`/lp user <player> permission unset <permission>`

Example:

`/lp user ExamplePlayer permission unset essentials.fly`

Removing a permission is different from setting it to false.

## Check a Permission

`/lp user <player> permission check <permission>`

Example:

`/lp user ExamplePlayer permission check essentials.fly`

# Group Commands

## View Group Information

`/lp group <group> info`

Example:

`/lp group admin info`

## Give a Group Permission

`/lp group <group> permission set <permission> true`

Example:

`/lp group default permission set EconomyShopGUI.shop true`

## Deny a Group Permission

`/lp group <group> permission set <permission> false`

Example:

`/lp group default permission set minecraft.command.op false`

## Create a Group

`/lp creategroup <group>`

Example:

`/lp creategroup moderator`

## Delete a Group

`/lp deletegroup <group>`

Example:

`/lp deletegroup oldrank`

Use this carefully.

# Parent and Rank Commands

## Add a Player to a Group

`/lp user <player> parent add <group>`

Example:

`/lp user ExamplePlayer parent add moderator`

## Set a Player's Main Group

`/lp user <player> parent set <group>`

Example:

`/lp user ExamplePlayer parent set admin`

This removes the player's other inherited groups before setting the selected group.

## Remove a Player From a Group

`/lp user <player> parent remove <group>`

Example:

`/lp user ExamplePlayer parent remove moderator`

## Add Group Inheritance

`/lp group <group> parent add <parent>`

Example:

`/lp group moderator parent add default`

The moderator group will inherit permissions from the default group.

# Temporary Permissions

## Temporary Permission

`/lp user <player> permission settemp <permission> true <duration>`

Example:

`/lp user ExamplePlayer permission settemp essentials.fly true 7d`

## Temporary Group

`/lp user <player> parent addtemp <group> <duration>`

Example:

`/lp user ExamplePlayer parent addtemp vip 30d`

Temporary access expires automatically.

# Prefixes and Suffixes

## Set a Group Prefix

`/lp group <group> meta setprefix <priority> "<prefix>"`

Example:

`/lp group admin meta setprefix 100 "&cAdmin &r"`

Higher priorities are normally selected before lower priorities.

## Set a Group Suffix

`/lp group <group> meta setsuffix <priority> "<suffix>"`

A compatible chat or tab plugin is required to display prefixes and suffixes.

# Tracks

Tracks arrange groups into a rank progression.

Example:

`default -> member -> vip -> moderator -> admin`

## Create a Track

`/lp createtrack <track>`

## Add a Group to a Track

`/lp track <track> append <group>`

## Promote a Player

`/lp user <player> promote <track>`

## Demote a Player

`/lp user <player> demote <track>`

# Verbose Mode

Verbose mode displays permission checks in real time.

Enable it:

`/lp verbose on`

Perform the command or action that is not working.

Disable it:

`/lp verbose off`

Verbose mode can show:

- The permission being checked

- The player being checked

- Whether it returned true or false

- Which plugin requested it

# Storage

LuckPerms supports storage systems such as:

- H2

- SQLite

- MySQL

- MariaDB

A shared database can be used across a network.

Configure storage carefully and back up the database before changing it.

# Security

Do not casually grant wildcard permissions such as:

`*`

`luckperms.*`

`essentials.*`

Wildcards can give access to dangerous administration commands.

Only owners or highly trusted administrators should have full LuckPerms access.

# Troubleshooting

## A Permission Still Does Not Work

Check:

1. The permission spelling

2. Whether it is set to false somewhere

3. Parent-group inheritance

4. Server or world contexts

5. Temporary permissions

6. Whether the plugin uses a different permission

7. LuckPerms verbose output

## Prefix Is Missing

LuckPerms stores the prefix, but another plugin must display it.

Check the chat, tab, scoreboard, or name-tag plugin.

## Changes Do Not Sync

For a network, confirm:

- Every server uses the same database

- Messaging or synchronization is configured

- LuckPerms is installed on every required server

- Servers are using compatible versions

## Updating LuckPerms

1. Stop the server or proxy.

2. Back up the LuckPerms database.

3. Back up `plugins/LuckPerms`.

4. Replace the plugin file.

5. Start the server.

6. Run `/lp info`.

7. Test groups and important permissions.