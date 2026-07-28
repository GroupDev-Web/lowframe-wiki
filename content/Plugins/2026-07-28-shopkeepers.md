---
title: Shopkeepers
draft: false
---
# Shopkeepers

Shopkeepers allows the server to create custom villager-style shops with controlled trades.

A shopkeeper can sell specific items for an exact price instead of using Minecraft's randomly generated villager trades.

# Types of Shops

## Admin Shops

Admin shops have an unlimited supply.

Items sold by an admin shop do not need to be stored in a chest.

Admin shops are useful for:

- Server stores

- Crate-key sellers

- Event shops

- Rank shops

- Currency exchanges

- Decorative traders

Only authorized staff should normally create admin shops.

## Player Shops

Player shops are owned by players and use items stored inside a connected container.

The shop can stop selling when its supply runs out.

Depending on the server configuration, player shops may allow players to:

- Sell items

- Buy items

- Trade items

- Edit their offers

- Add shop members

- Transfer ownership

# Player Guide

## Trading

Right-click a shopkeeper to open its trading screen.

Review both sides of the trade before confirming it.

A shopkeeper may require:

- Items

- Emeralds

- Custom currency items

- A permission

- Another configured payment item

## Player Shop Supply

A player shop normally uses a chest or another supported container.

The required selling items must remain inside the connected container.

When the shop runs out of stock, players cannot complete that trade.

## Editing Your Shop

Depending on server permissions, a player may be able to open the shop editor by:

- Sneaking and right-clicking the shopkeeper

- Right-clicking its connected container

- Running `/shopkeeper edit`

The editor can control:

- Shop name

- Shop appearance

- Trade offers

- Shop members

- Shop ownership

- Shop deletion

# Server Setup

## Installation

1. Stop the server.

2. Download Shopkeepers.

3. Upload the plugin file to:

`plugins`

4. Start the server.

5. Check the console for errors.

6. Run:

`/plugins`

7. Confirm Shopkeepers appears in green.

Configuration files are stored in:

`plugins/Shopkeepers`

## Creating an Admin Shop

Look at the block where the shopkeeper should be created and run:

`/shopkeeper <shop-type> <object-type>`

The available shop and object types are displayed through tab completion.

A shop can then be edited to add trades.

## Creating a Player Shop

Player-shop creation depends on the server configuration.

A common process is:

1. Receive a shop-creation item.

2. Place a chest containing the shop's stock.

3. Select the desired shop type.

4. Click the chest.

5. Select where the shopkeeper should appear.

6. Open the editor.

7. Configure the trades.

Player-shop creation may be disabled on some servers.

# Commands

## Help

`/shopkeeper help`

Displays the commands available to you.

## Create a Shopkeeper

`/shopkeeper [shop-type] [object-type]`

Creates a shopkeeper at the targeted block.

## Reload

`/shopkeeper reload`

Reloads the plugin configuration.

## List Shops

`/shopkeeper list [player|'admin'|'all'] [page]`

Examples:

`/shopkeeper list`

`/shopkeeper list admin`

`/shopkeeper list all`

## Edit a Shop

`/shopkeeper edit [shop]`

A shop can be selected by:

- Looking at it

- Name

- ID

- Unique ID

The command user must have editing rights.

## Remotely Open a Shop

`/shopkeeper remote [shop] [player]`

This opens a shop without standing next to it.

The command user must have trading access to the shop.

## Remove a Shop

`/shopkeeper remove [shop]`

The command user must have editing rights.

## Remove Multiple Shops

`/shopkeeper removeAll [player|'player'|'admin']`

This requires confirmation using:

`/shopkeeper confirm`

Use this carefully.

## Give a Shop-Creation Item

`/shopkeeper give [player] [shop-type] [object-type] [amount]`

This gives a player an item used to create a shop.

## Set Shop Currency

Hold the currency item and run:

`/shopkeeper setCurrency base`

or:

`/shopkeeper setCurrency high`

Changing currency can affect existing trades.

## Transfer a Shop

`/shopkeeper transfer <new-owner>`

Look at or select the shop before using the command.

## Set a Trading Permission

`/shopkeeper setTradePerm [shop] <permission|'-'|'?'>`

Examples:

Set a permission:

`/shopkeeper setTradePerm KeyShop lowframe.shop.keys`

Remove the permission:

`/shopkeeper setTradePerm KeyShop -`

View the current permission:

`/shopkeeper setTradePerm KeyShop ?`

## Teleport to a Shop

`/shopkeeper teleport [player] <shop>`

The command attempts to place the player safely near the shopkeeper.

## Toggle Trade Notifications

`/shopkeeper notify trades`

This toggles trade notifications for the current session.

# Permissions

Shopkeepers has separate permissions for:

- Creating player shops

- Creating admin shops

- Trading

- Editing shops

- Removing shops

- Remote access

- Transferring ownership

- Listing shops

- Reloading the plugin

- Debugging

Use:

`/shopkeeper help`

to see commands available through the permissions currently assigned to you.

Administrators should receive only the permissions they need.

# Using Shopkeepers With FancyNpcs

FancyNpcs can run the remote Shopkeepers command when a player clicks an NPC.

Example FancyNpcs action:

`/npc action ShopNPC any_click add console_command shopkeeper remote SHOP_ID {player}`

Replace `SHOP_ID` with the Shopkeepers shop ID.

# Using Shopkeepers for Crate Keys

An admin shop can sell ExcellentCrates key items.

Suggested process:

1. Create the physical key item.

2. Hold the key item.

3. Add it as the shop's selling result.

4. Set the required payment item or currency.

5. Test the trade.

6. Confirm the key opens the correct crate.

# Troubleshooting

## The Shop Has No Stock

For a player shop, place the selling items inside the connected container.

Admin shops have unlimited stock and do not require a container supply.

## The Shop Cannot Be Edited

The player may not:

- Own the shop

- Have full shop-member access

- Have editing permission

- Be selecting the correct shop

## The Trade Uses the Wrong Item

Minecraft items can contain hidden data.

Recreate the trade using the exact item that should be accepted or sold.

## A Shopkeeper Disappeared

Check:

- Whether it was removed

- Whether its chunk is loading

- Whether another plugin removed the entity

- Whether the world was restored from a backup

- The Shopkeepers console output

## Updating Shopkeepers

1. Stop the server.

2. Back up the Shopkeepers plugin folder.

3. Back up the world.

4. Replace the plugin file.

5. Start the server.

6. Test admin shops.

7. Test player shops.

8. Test custom items and currencies.