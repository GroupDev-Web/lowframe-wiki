---
title: DeluxeMenus
draft: false
---
# DeluxeMenus

DeluxeMenus creates custom inventory menus that can display information and run actions when players click items.

Menus are configured using YAML files.

# Player Guide

Players open a menu using its configured command.

Examples may include:

`/menu`

`/help`

`/servers`

`/rewards`

`/shopmenu`

The available commands depend on the server's menu configuration.

Menu items may:

- Run commands

- Open another menu

- Connect to a server

- Close the menu

- Send a message

- Play a sound

- Refresh the menu

- Charge money

- Check permissions

- Check items

- Display PlaceholderAPI information

# Server Setup

## Requirements

DeluxeMenus normally requires:

- A compatible Paper or Spigot server

- PlaceholderAPI

Vault is required for money-based requirements or actions.

## Installation

1. Stop the server.

2. Download DeluxeMenus.

3. Download PlaceholderAPI.

4. Upload both plugin files to:

`plugins`

5. Start the server.

6. Check the console.

7. Run:

`/plugins`

8. Confirm DeluxeMenus and PlaceholderAPI appear in green.

Configuration files are stored in:

`plugins/DeluxeMenus`

# Main Configuration

Menus can be registered in:

`plugins/DeluxeMenus/config.yml`

Example:

    gui_menus:

      main_menu:

        file: main_menu.yml

The menu file would then be stored in the configured GUI menu directory.

Each menu name must be unique.

# Basic Menu Example

    menu_title: '&8LowFrame Menu'

    open_command:

      - menu

    size: 27

    items:

      server_info:

        material: BOOK

        slot: 11

        display_name: '&aServer Information'

        lore:

          - '&7View important server information.'

        left_click_commands:

          - '[message] &aWelcome to LowFrame!'

          - '[close]'

      close:

        material: BARRIER

        slot: 15

        display_name: '&cClose'

        left_click_commands:

          - '[close]'

The inventory size must normally be a multiple of nine.

Common sizes include:

- `9`

- `18`

- `27`

- `36`

- `45`

- `54`

# Commands

## Plugin Information

`/dm`

Displays DeluxeMenus information.

## Open a Menu

`/dm open <menu>`

Example:

`/dm open main_menu`

Permission:

`deluxemenus.open`

## Open a Menu for Another Player

`/dm open <menu> <player>`

Example:

`/dm open main_menu ExamplePlayer`

Permission:

`deluxemenus.open.others`

## Reload DeluxeMenus

`/dm reload`

Administrative access is required.

Check the console after reloading because invalid menus may be skipped.

## List Menus

`/dm list`

Displays loaded menus.

# Permissions

All administrative commands:

`deluxemenus.admin`

Open menus through `/dm open`:

`deluxemenus.open`

Open menus for other players:

`deluxemenus.open.others`

Bypass menu opening requirements:

`deluxemenus.open.bypass`

Access all menus:

`deluxemenus.menu.*`

Bypass menu opening requirements:

`deluxemenus.openrequirement.bypass`

A menu can also use its own custom permission.

Example:

`lowframe.menu.admin`

# Menu Settings

## Menu Title

    menu_title: '&8Main Menu'

## Open Command

One command:

    open_command: menu

Multiple commands:

    open_command:

      - menu

      - mainmenu

Do not include `/` before command names.

Make sure the commands do not conflict with another plugin.

## Size

    size: 27

## Update Interval

    update_interval: 20

This allows configured items to refresh placeholders.

The interval is normally measured in ticks.

# Item Settings

## Material

    material: GRASS_BLOCK

## Slot

    slot: 10

Slots begin at `0`.

For a 27-slot menu, valid slots are `0` through `26`.

## Display Name

    display_name: '&aRandom Teleport'

## Lore

    lore:

      - '&7Teleport to a random location.'

      - ''

      - '&eClick to use.'

## Amount

    amount: 1

## Enchantment Glow

An enchantment can be added and hidden to create a glow effect.

Use valid enchantment names for the installed Minecraft version.

# Click Actions

## Player Command

    left_click_commands:

      - '[player] rtp'

Runs the command as the player.

Do not include a slash.

## Console Command

    left_click_commands:

      - '[console] give %player_name% diamond 1'

Runs the command as the server console.

## Message

    left_click_commands:

      - '[message] &aHello, %player_name%!'

## Open Another Menu

    left_click_commands:

      - '[openguimenu] help_menu'

## Connect to a Proxy Server

    left_click_commands:

      - '[connect] smp2'

The server name must match the proxy configuration.

## Close the Menu

    left_click_commands:

      - '[close]'

## Refresh the Menu

    left_click_commands:

      - '[refresh]'

## Play a Sound

    left_click_commands:

      - '[sound] ENTITY_EXPERIENCE_ORB_PICKUP'

## Take Money

    left_click_commands:

      - '[takemoney] 500'

This requires Vault and a compatible economy provider.

# Click Types

DeluxeMenus can run different actions for:

- Left click

- Right click

- Middle click

- Shift-left click

- Shift-right click

Examples:

`left_click_commands`

`right_click_commands`

`middle_click_commands`

`shift_left_click_commands`

`shift_right_click_commands`

# Requirements

Requirements control whether an item appears or whether an action can run.

Possible checks include:

- Permission

- Money

- Item

- String comparison

- Number comparison

- JavaScript expression

- Placeholder value

## Permission Requirement

    open_requirement:

      requirements:

        permission:

          type: has permission

          permission: [lowframe.menu.vip](http://lowframe.menu.vip)

      deny_commands:

        - '[message] &cYou do not have permission to open this menu.'

## Money Requirement

    left_click_requirement:

      requirements:

        money:

          type: has money

          amount: 500

      deny_commands:

        - '[message] &cYou need $500.'

    left_click_commands:

      - '[takemoney] 500'

      - '[console] give %player_name% diamond 1'

      - '[message] &aPurchase completed.'

Vault is required for money checks.

# Placeholders

PlaceholderAPI placeholders can be used in:

- Menu titles

- Display names

- Lore

- Commands

- Requirements

- Messages

Examples:

`%player_name%`

`%server_online%`

`%vault_eco_balance_formatted%`

The necessary PlaceholderAPI expansion must be installed.

# Priorities

Multiple item definitions can use the same slot.

Priorities allow a different item to be shown depending on permissions or requirements.

A lower numeric priority is considered before a higher numeric priority.

Always create a fallback item that does not require a permission.

Otherwise, the slot may appear empty.

# Troubleshooting

## Menu Does Not Load

Check:

- YAML indentation

- Duplicate menu names

- Duplicate item identifiers

- Invalid materials

- Invalid inventory size

- Missing colons

- Tabs instead of spaces

- Incorrect file path

The console normally reports the menu and line containing the error.

## Open Command Does Not Work

Check:

- The menu loaded successfully

- `open_command` is configured

- The command has no slash in the YAML file

- Another plugin does not already own the command

- The player meets opening requirements

## Items Appear in the Wrong Slots

DeluxeMenus slots begin at `0`, not `1`.

For a 27-slot inventory:

- First slot: `0`

- Last slot: `26`

## Placeholders Appear as Plain Text

Check that:

- PlaceholderAPI is installed

- The required expansion is installed

- The placeholder is spelled correctly

- The expansion was reloaded

- The placeholder works with `/papi parse`

## Click Command Does Nothing

Check that:

- The action prefix is valid

- Player and console commands do not contain a slash

- The target command works outside the menu

- Requirements are passing

- The player has permission

- The console shows no errors

## Menu Reload Fails

Fix the YAML error before reloading again.

A broken menu may not load while the other valid menus continue working.

## Updating DeluxeMenus

1. Stop the server.

2. Back up `plugins/DeluxeMenus`.

3. Replace the plugin file.

4. Start the server.

5. Review console warnings.

6. Test every important menu.

7. Test commands, requirements, placeholders, and server transfers.