---
title: ExcellentCrates
draft: false
---
# ExcellentCrates

ExcellentCrates is the crate and reward system used to create crates, keys, reward previews, opening animations, and prize pools.

Players can use physical or virtual keys to open crates and receive a randomly selected reward.

# Player Guide

## Opening a Crate

Crates may be opened by:

- Interacting with a crate block

- Using a crate menu

- Running a crate command when enabled

- Receiving a crate item

A key or another opening requirement may be needed.

## Physical Keys

Physical keys are Minecraft items stored in your inventory.

Physical keys may be:

- Traded

- Stored in chests

- Lost after death

- Given to another player

The exact appearance of a key depends on the server configuration.

## Virtual Keys

Virtual keys are stored directly in your account instead of your inventory.

Virtual keys cannot normally be:

- Dropped

- Traded

- Lost after death

- Stored in containers

Check your keys using:

`/crates key inspect`

## Previewing Rewards

Use:

`/crates preview <crate>`

Example:

`/crates preview vote`

The preview menu may show:

- Possible rewards

- Reward names

- Reward rarities

- Reward chances

- Items you cannot currently receive

Not every crate is required to have a preview menu.

## Crate Rewards

Crates can contain item rewards or command rewards.

Possible rewards include:

- Blocks

- Tools

- Armor

- Money

- Crate keys

- Ranks

- Commands

- Custom items

Rewards may have different rarities and chances.

Some rewards may require a permission before they can be received.

# Server Setup

## Requirements

ExcellentCrates requires:

- A supported Spigot or Paper server

- A compatible Java version

- NightCore

Optional integrations include:

- PlaceholderAPI

- ProtocolLib

- PacketEvents

- Custom item plugins

ProtocolLib or PacketEvents may be required for crate holograms, depending on the server setup.

## Installation

1. Stop the server.

2. Download ExcellentCrates.

3. Download the required NightCore version.

4. Upload both plugin files to:

`plugins`

5. Start the server.

6. Check the console for errors.

7. Run:

`/plugins`

8. Confirm ExcellentCrates and NightCore appear in green.

Configuration files are stored in:

`plugins/ExcellentCrates`

## Editor

Open the in-game editor using:

`/crates editor`

The editor can manage:

- Crates

- Keys

- Rewards

- Reward chances

- Rarities

- Opening animations

- Preview menus

- Linked crate blocks

- Holograms

- Particle effects

- Opening costs

- Cooldowns

Required permission:

`excellentcrates.command.editor`

## Linking a Crate to a Block

1. Run `/crates editor`.

2. Open the Crates section.

3. Select a crate.

4. Select the linked-block option.

5. Click the block that should become the crate.

Players can then interact with that block to use the crate.

# Commands

## Help

`/crates help`

Displays the available commands.

The main command aliases are:

`/crates`

`/excellentcrates`

## Reload

`/crates reload`

Required permission:

`excellentcrates.command.reload`

## Open a Crate

`/crates open <crate>`

Example:

`/crates open vote`

Required permission:

`excellentcrates.command.open`

## Open a Crate for Another Player

`/crates openfor <player> <crate>`

Example:

`/crates openfor ExamplePlayer vote`

Required permission:

`excellentcrates.command.openfor`

## Preview a Crate

`/crates preview <crate> [player]`

Required permission:

`excellentcrates.command.preview`

## Give a Crate

`/crates give <player> <crate> [amount]`

Example:

`/crates give ExamplePlayer vote 1`

Required permission:

`excellentcrates.command.give`

## Inspect Keys

`/crates key inspect [player]`

Required permission:

`excellentcrates.command.key.show`

Checking another player's keys requires:

`excellentcrates.command.key.show.others`

## Give Keys

`/crates key give <player> <key> [amount]`

Example:

`/crates key give ExamplePlayer vote 3`

Required permission:

`excellentcrates.command.key.give`

## Take Keys

`/crates key take <player> <key> [amount]`

Required permission:

`excellentcrates.command.key.take`

## Set Key Amount

`/crates key set <player> <key> [amount]`

Required permission:

`excellentcrates.command.key.set`

## Give a Key to Every Online Player

`/crates key giveall <key> [amount]`

Required permission:

`excellentcrates.command.key.give`

Players must have this permission to be included:

`excellentcrates.include.giveall`

## Reset an Opening Cooldown

`/crates resetcooldown <player> <crate>`

Required permission:

`excellentcrates.command.resetcooldown`

# Important Permissions

All ExcellentCrates features:

`excellentcrates.*`

All commands:

`excellentcrates.command.*`

Use mass opening:

`excellentcrates.massopen`

Bypass crate opening cooldowns:

`excellentcrates.bypass.crate.opencooldown`

Only trusted administrators should receive administrative crate permissions.

# Troubleshooting

## A Crate Will Not Open

Check that:

- The player has the required key

- The crate is linked correctly

- The player meets permission requirements

- The crate is not on cooldown

- The player can afford the opening cost

- ExcellentCrates loaded successfully

## Holograms Do Not Appear

Check that:

- Holograms are enabled for the crate

- A valid hologram template is selected

- ProtocolLib or PacketEvents is installed when required

- The crate is linked to a block

## Keys Are Missing

Confirm whether the key is physical or virtual.

Physical keys appear in the inventory.

Virtual keys can be checked using:

`/crates key inspect`

## Changes Do Not Appear

Run:

`/crates reload`

A full restart may be required after installing, removing, or updating plugins.

## Updating ExcellentCrates

1. Stop the server.

2. Back up `plugins/ExcellentCrates`.

3. Back up player and reward data.

4. Update ExcellentCrates.

5. Update NightCore at the same time.

6. Start the server.

7. Check the console.

8. Test every crate before allowing players to use them.