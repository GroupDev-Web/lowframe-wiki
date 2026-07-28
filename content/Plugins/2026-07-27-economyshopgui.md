---
title: EconomyShopGUI
draft: false
---
# EconomyShopGUI

EconomyShopGUI provides a graphical server shop where players can buy items from the server and sell items for money.

Players do not need to install any mods.

## Player Guide

### Open the Shop

Run:

`/shop`

This opens the main shop menu.

Select a category to view the items available inside it.

### Open a Specific Category

Run:

`/shop <section>`

Replace `<section>` with the category's internal name.

Example:

`/shop blocks`

Other examples may include:

`/shop farming`

`/shop redstone`

`/shop workstations`

The available section names depend on the server's configuration.

## Buying Items

1. Run `/shop`.

2. Open a category.

3. Select an item.

4. Choose the amount you want to purchase.

5. Confirm the purchase.

The money is taken from your economy balance.

You cannot buy an item when:

- You do not have enough money.

- The item has buying disabled.

- You do not have access to its shop section.

- Your inventory is full.

- The item is temporarily unavailable.

## Selling Items

Items can be sold from the normal shop menu when they have a sell price.

1. Run `/shop`.

2. Open the category containing the item.

3. Select the item.

4. Choose the amount you want to sell.

5. Confirm the sale.

The items are removed from your inventory and money is added to your balance.

Not every item can be sold.

## Sell GUI

Run:

`/sellgui`

This opens an inventory where you can place items you want to sell.

After placing the items inside, close the menu to complete the sale.

Items that do not have a sell price will not be sold.

## Sell Your Inventory

Run:

`/sellall inventory`

This attempts to sell every sellable item in your inventory.

Items without a configured sell price remain in your inventory.

## Sell the Item in Your Hand

Run:

`/sellall hand`

This sells every matching item from the stack currently in your hand.

## Sell One Item Type

Run:

`/sellall <item>`

Example:

`/sellall diamond`

Another example:

`/sellall cobblestone`

This sells matching items from your inventory.

## Common Player Problems

### The Shop Does Not Open

You may be missing:

`EconomyShopGUI.shop`

You may also be missing access to the shop section.

### A Category Does Not Open

The category may require:

`EconomyShopGUI.shop.<section>`

Replace `<section>` with the category name.

Example:

`EconomyShopGUI.shop.redstone`

### An Item Cannot Be Bought

The item may have buying disabled, or you may not have enough money.

Check your balance and confirm that the item displays a buy price.

### An Item Cannot Be Sold

The item may not have a sell price.

Items with selling disabled cannot be sold through the shop, `/sellgui`, or `/sellall`.

### Sell GUI Rejects an Item

The item may:

- Have no sell price.

- Contain unsupported custom data.

- Be different from the item configured in the shop.

- Belong to a section you cannot access.

# Installation for Server Owners

EconomyShopGUI is installed as a server plugin.

It supports Bukkit-based servers such as:

- Paper

- Purpur

- Spigot

- Bukkit

Paper or Purpur is recommended for modern servers.

## Requirements

EconomyShopGUI requires a supported economy provider.

Common setups include:

- Vault with an economy plugin

- ExcellentEconomy

- EssentialsX Economy through Vault

- PlayerPoints

- GemsEconomy

- UltraEconomy

- VotingPlugin

For a normal Vault setup, install:

- EconomyShopGUI

- Vault

- An economy plugin such as ExcellentEconomy or EssentialsX Economy

## Installing EconomyShopGUI

1. Stop the Minecraft server.

2. Download the EconomyShopGUI version matching your Minecraft version.

3. Upload the EconomyShopGUI `.jar` file to the server's `plugins` folder.

4. Install a supported economy provider.

5. Start the server.

6. Wait for the plugin to generate its files.

7. Check the console for errors.

8. Stop the server before making large configuration changes.

The plugin folder is normally located at:

`plugins/EconomyShopGUI`

Run:

`/plugins`

EconomyShopGUI should appear in green.

## Testing the Installation

Run:

`/shop`

The default shop menu should open.

Test buying an inexpensive item.

Then test selling an item that has a sell price.

Also confirm that the player's economy balance changes correctly.

## Important Configuration Files

The EconomyShopGUI folder contains the plugin's settings and shop data.

### `config.yml`

Controls the plugin's main settings.

This can include:

- Economy provider

- Currency formatting

- Transaction settings

- Sound settings

- Shop behavior

- Purchase menus

- Sell menus

- Discounts

- Sell multipliers

- Logging

- Integrations

- Default item formatting

### `sections.yml`

Controls the categories displayed in the main `/shop` menu.

A section can define:

- Section name

- Display name

- Material

- Menu slot

- Lore

- Shop file

- Permission requirements

- Navigation settings

### `shops.yml`

Stores shop items and their prices.

Depending on the plugin version or configuration layout, individual shops may also be separated into additional shop files.

Shop entries can contain:

- Material

- Buy price

- Sell price

- Display name

- Lore

- Enchantments

- Item flags

- Potion data

- Spawner data

- Commands

- Custom model data

- Page and slot positions

### Language Files

Language files control the messages shown to players.

They can be used to customize:

- Purchase messages

- Sale messages

- Error messages

- Menu item names

- Price text

- Confirmation text

- Reload messages

## Main Administrative Commands

### Reload EconomyShopGUI

Run:

`/sreload`

This reloads EconomyShopGUI's configuration and shop files.

Required permission:

`EconomyShopGUI.reload`

Use `/sreload` instead of the server-wide `/reload` command.

A full restart may still be needed after updating the plugin or making major configuration changes.

### Add an Item by Material

Run:

`/eshop additem <section> <material> <buy-price> <sell-price> [display-name]`

Example:

`/eshop additem blocks STONE 5 1 Stone`

This adds stone to the `blocks` section.

Another example:

`/eshop additem ores DIAMOND 500 250 Diamond`

### Add the Item in Your Hand

Hold the item and run:

`/eshop addhanditem <section> <buy-price> <sell-price>`

Example:

`/eshop addhanditem tools 1000 250`

This is useful for items containing:

- Custom names

- Lore

- Enchantments

- Item flags

- Potion data

- Custom model data

- Armor trims

Required permission:

`EconomyShopGUI.eshop.addhanditem`

### Edit a Shop Item

Run:

`/eshop edititem <section> <index> <action> <key> <value>`

Example:

`/eshop edititem blocks 1 set buy 10`

The exact actions and keys depend on the setting being changed.

Required permission:

`EconomyShopGUI.eshop.edititem`

### Delete a Shop Item

Run:

`/eshop deleteitem <section> <index>`

Example:

`/eshop deleteitem blocks 1`

Required permission:

`EconomyShopGUI.eshop.deleteitem`

### View Item Indexes

Give yourself:

`EconomyShopGUI.itemindexes`

This allows item indexes to appear when hovering over shop items.

Indexes are needed when editing or deleting an existing item.

### Give a Shop Item

Run:

`/shopgive <section> <index> [player]`

Example:

`/shopgive tools 4 YTRift`

This gives the configured shop item directly to a player.

It is useful for testing custom item data.

## Managing Shop Sections

### Add a Section

Run:

`/eshop addsection <section> <material> <display-name> <place>`

Example:

`/eshop addsection workstations CRAFTING_TABLE Workstations 12`

This creates a new shop section.

Required permission:

`EconomyShopGUI.eshop.addsection`

### Edit a Section

Run:

`/eshop editsection <section> <action> <key> <value>`

Example:

`/eshop editsection workstations set slot 12`

Required permission:

`EconomyShopGUI.eshop.editsection`

### Delete a Section

Run:

`/eshop deletesection <section>`

Example:

`/eshop deletesection workstations`

Required permission:

`EconomyShopGUI.eshop.deletesection`

Back up your shop configuration before deleting a section.

## Buying and Selling Prices

Every normal shop item can have:

- A buy price

- A sell price

- Both prices

- Only one enabled price

Example:

`buy: 100`

`sell: 25`

This allows players to buy the item for `$100` and sell it for `$25`.

The sell price should normally be lower than the buy price.

Otherwise, players may be able to repeatedly buy and sell items for profit.

### Disable Buying

Set the buy price to a negative number.

Example:

`buy: -1`

Players can sell the item but cannot buy it.

### Disable Selling

Set the sell price to a negative number.

Example:

`sell: -1`

Players can buy the item but cannot sell it.

### Disable Both

Set both prices to negative values:

`buy: -1`

`sell: -1`

An item with both prices disabled may be useful as a decoration or navigation item.

## Recommended Pricing Rules

Before publishing the shop:

1. Compare the buy and sell price of every item.

2. Check crafting recipes.

3. Check whether items can be converted into other items.

4. Check villager trades.

5. Check furnace and stonecutter recipes.

6. Check compact and uncompact recipes.

7. Test farms that can produce items automatically.

8. Test whether players can create an infinite-money loop.

For example, check whether a player can:

1. Buy an item cheaply.

2. Craft it into another item.

3. Sell the result for more money.

Back up the shop before making large price changes.

## Shop Permissions

### Open the Shop

`EconomyShopGUI.shop`

Allows players to use `/shop`.

### Open One Section

`EconomyShopGUI.shop.<section>`

Replace `<section>` with the shop section name.

Example:

`EconomyShopGUI.shop.blocks`

### Open Every Section

`EconomyShopGUI.shop.all`

Allows access to all shop sections.

Shop-section access is normally allowed by default unless it is denied using a permissions plugin.

## Sell-All Permissions

### Use Sell All

`EconomyShopGUI.sellall`

Allows access to `/sellall`.

### Sell From One Section

`EconomyShopGUI.sellall.<section>`

Example:

`EconomyShopGUI.sellall.blocks`

### Sell From Every Section

`EconomyShopGUI.sellall.all`

### Sell a Selected Item Type

`EconomyShopGUI.sellallitem`

Allows `/sellall <item>`.

### Sell an Item Type From One Section

`EconomyShopGUI.sellallitem.<section>`

### Sell an Item Type From Every Section

`EconomyShopGUI.sellallitem.all`

### Sell the Item in Your Hand

`EconomyShopGUI.sellallhand`

Allows `/sellall hand`.

### Sell Hand Items From One Section

`EconomyShopGUI.sellallhand.<section>`

### Sell Hand Items From Every Section

`EconomyShopGUI.sellallhand.all`

## Sell GUI Permissions

### Open Sell GUI

`EconomyShopGUI.sellgui`

Allows `/sellgui`.

### Sell Items From One Section

`EconomyShopGUI.sellgui.<section>`

Example:

`EconomyShopGUI.sellgui.farming`

### Sell Items From Every Section

`EconomyShopGUI.sellgui.all`

## Editing Permissions

### Add Items

`EconomyShopGUI.eshop.additem`

### Add Held Items

`EconomyShopGUI.eshop.addhanditem`

### Edit Items

`EconomyShopGUI.eshop.edititem`

### Delete Items

`EconomyShopGUI.eshop.deleteitem`

### Import Shop Data

`EconomyShopGUI.eshop.import`

### Add Sections

`EconomyShopGUI.eshop.addsection`

### Edit Sections

`EconomyShopGUI.eshop.editsection`

### Delete Sections

`EconomyShopGUI.eshop.deletesection`

### Upload a Layout

`EconomyShopGUI.eshop.uploadLayout`

### Install a Layout

`EconomyShopGUI.eshop.installLayout`

Only trusted administrators should receive shop-editing permissions.

## Recommended LuckPerms Setup

Allow the default group to open the shop:

`/lp group default permission set EconomyShopGUI.shop true`

Allow access to every shop section:

`/lp group default permission set EconomyShopGUI.shop.all true`

Allow `/sellall`:

`/lp group default permission set EconomyShopGUI.sellall true`

Allow selling from every section:

`/lp group default permission set EconomyShopGUI.sellall.all true`

Allow `/sellall <item>`:

`/lp group default permission set EconomyShopGUI.sellallitem true`

Allow item-based selling from every section:

`/lp group default permission set EconomyShopGUI.sellallitem.all true`

Allow `/sellall hand`:

`/lp group default permission set EconomyShopGUI.sellallhand true`

Allow hand selling from every section:

`/lp group default permission set EconomyShopGUI.sellallhand.all true`

Allow `/sellgui`:

`/lp group default permission set EconomyShopGUI.sellgui true`

Allow Sell GUI access to every section:

`/lp group default permission set EconomyShopGUI.sellgui.all true`

## Restricted Shop Sections

A section can be limited to a specific rank.

For example, to prevent the default group from using an admin shop:

`/lp group default permission set EconomyShopGUI.shop.adminshop false`

Allow administrators to use it:

`/lp group admin permission set EconomyShopGUI.shop.adminshop true`

Do not give the default group `EconomyShopGUI.shop.all` when you want some sections to remain restricted.

Instead, give access to each public section separately.

Example:

`/lp group default permission set EconomyShopGUI.shop.blocks true`

`/lp group default permission set EconomyShopGUI.shop.farming true`

`/lp group default permission set EconomyShopGUI.shop.redstone true`

## Discounts

EconomyShopGUI can give selected groups lower buy prices.

The permission format is:

`EconomyShopGUI.discounts.<group>`

Example:

`EconomyShopGUI.discounts.vip`

The discount group and percentage must also be configured in the plugin settings.

Example LuckPerms command:

`/lp group vip permission set EconomyShopGUI.discounts.vip true`

## Sell Multipliers

Sell multipliers allow selected groups to receive more money when selling.

The permission format is:

`EconomyShopGUI.sell-multipliers.<group>`

Example:

`EconomyShopGUI.sell-multipliers.vip`

Example LuckPerms command:

`/lp group vip permission set EconomyShopGUI.sell-multipliers.vip true`

The multiplier must also be defined in the plugin configuration.

## Community Layouts

EconomyShopGUI can install layouts from its community marketplace.

### Upload a Layout

Run:

`/eshop uploadLayout`

Required permission:

`EconomyShopGUI.eshop.uploadLayout`

### Install a Layout

Run:

`/eshop installLayout <layout-id>`

Required permission:

`EconomyShopGUI.eshop.installLayout`

Back up your current shop files before installing another layout because it may replace existing categories, prices, or settings.

## ShopStands

ShopStands are physical shop displays placed in the Minecraft world.

### Give a ShopStand Item

Run:

`/eshop shopstands give <type> <section> <index>`

### Destroy a ShopStand

Run:

`/eshop shopstands destroy <id>`

### Browse ShopStands

Run:

`/eshop shopstands browse`

ShopStand permissions include:

`EconomyShopGUI.eshop.shopstands.give`

`EconomyShopGUI.eshop.shopstands.destroy`

`EconomyShopGUI.eshop.shopstands.browse`

`EconomyShopGUI.eshop.shopstands.edit`

`EconomyShopGUI.eshop.shopstands.create`

## Vault and ExcellentEconomy Setup

For a Vault-based setup, install:

- Vault

- ExcellentEconomy

- EconomyShopGUI

Confirm that ExcellentEconomy is the active Vault provider.

Then restart the server and test:

`/shop`

Buy an inexpensive item and confirm that the ExcellentEconomy balance decreases.

Sell the item and confirm that the balance increases.

## PlaceholderAPI

EconomyShopGUI supports PlaceholderAPI integration for displaying shop information in other plugins.

Possible uses include:

- Scoreboards

- Menus

- Holograms

- Chat formats

- Item lore

- Server information pages

The exact placeholders depend on the feature and installed EconomyShopGUI version.

## Transaction Logging

EconomyShopGUI can record player purchases and sales.

Transaction logs can help server owners:

- Detect economy exploits.

- Review suspicious purchases.

- Find incorrect prices.

- Track how much money enters or leaves the economy.

- Compare popular shop items.

- Investigate reports from players.

Recent versions can export transaction data using EconomyShopGUI's administrative logging commands.

## Editing YAML Safely

YAML requires exact indentation.

When editing configuration files:

- Use spaces instead of tabs.

- Keep indentation consistent.

- Put text containing special characters inside quotes.

- Do not create duplicate keys.

- Do not remove required colons.

- Back up the file before editing.

- Stop the server before making large changes.

After editing, run:

`/sreload`

If the configuration fails to load, inspect the server console for the filename and line number.

## Troubleshooting

### EconomyShopGUI Appears Red in `/plugins`

Check that:

- A supported economy provider is installed.

- Vault is installed when required.

- The plugin version supports your Minecraft version.

- The server uses Paper, Purpur, Spigot, or Bukkit.

- The `.jar` file is inside the `plugins` folder.

- The server console does not report a missing dependency.

### The Shop Opens but Categories Do Not

Check:

- The section exists in `sections.yml`.

- The linked shop exists.

- The player has permission for the section.

- The section's material is valid.

- The section uses a valid menu slot.

- `/sreload` completed without errors.

### An Item Appears as a Barrier

A barrier usually means EconomyShopGUI could not load the configured item.

Check:

- The material name.

- The Minecraft version.

- Custom item data.

- Spawner integration.

- Enchantment names.

- Potion configuration.

- YAML indentation.

The console normally provides more information.

### The Shop Says No Economy Was Found

Check that:

- Vault is installed when using a Vault economy.

- An economy plugin is installed.

- The economy plugin loaded successfully.

- The selected provider is supported.

- The server was restarted after installing dependencies.

### Prices Do Not Change

Run:

`/sreload`

If the old price remains:

1. Confirm that you edited the correct shop file.

2. Check for YAML errors.

3. Confirm that the item is not defined twice.

4. Restart the server.

5. Clear any proxy or plugin menu cache if applicable.

### Players Can Open Some Shops but Not Others

Check the section permission:

`EconomyShopGUI.shop.<section>`

Also check whether the player has a negative permission overriding access.

### Players Cannot Use `/sellgui`

Give:

`EconomyShopGUI.sellgui`

Also give access to the required sections:

`EconomyShopGUI.sellgui.all`

### Players Can Create Infinite Money

Review:

- Buy prices

- Sell prices

- Crafting recipes

- Smelting recipes

- Stonecutter recipes

- Villager trades

- Compacting recipes

- Uncrafting recipes

- Custom recipes

- Automatic farms

Immediately disable the affected item's sell price until the pricing loop is fixed.

### Changes Keep Resetting

Stop the server before editing configuration files.

Save the file while the server is stopped, then start it again.

Avoid the server-wide `/reload` command.

## Updating EconomyShopGUI

1. Stop the server.

2. Back up `plugins/EconomyShopGUI`.

3. Back up the economy database.

4. Download the latest compatible plugin version.

5. Replace the old EconomyShopGUI `.jar`.

6. Keep the configuration backup.

7. Start the server.

8. Review the console for migration warnings.

9. Test `/shop`.

10. Test buying and selling.

11. Confirm that permissions still work.

12. Confirm that the economy provider still connects.

Do not delete your backup until the updated version is working correctly.