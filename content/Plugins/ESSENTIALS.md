---
title: EssentialsX
draft: false
---
# EssentialsX

EssentialsX is a plugin for Paper, Bukkit, and Spigot servers that contains essential server commands such as `/tpa`, `/sethome`, and more.

## LowFrame Commands

On LowFrame, EssentialsX provides the following commands.

| Command | What it does |

|---|---|

| `/afk` | Marks you as AFK or removes your AFK status. |

| `/back` | Teleports you to your previous location. |

| `/discord` | Shows the server's Discord link. |

| `/enderchest` | Opens your Ender Chest. |

| `/home [name]` | Teleports you to one of your homes. |

| `/mail read` | Shows your in-game mail. |

| `/mail send <player> <message>` | Sends mail to another player. |

| `/motd` | Shows the server's message of the day. |

| `/ping` | Checks whether the server is responding. |

| `/rtp` | Randomly teleports you to another location. |

| `/sethome [name]` | Creates a home at your current location. |

| `/spawn` | Teleports you to the server spawn. |

| `/suicide` | Respawns your in-game character. |

| `/tpa <player>` | Requests to teleport to another player. |

| `/tpacancel` | Cancels your current teleport request. |

| `/tpaccept` | Accepts an incoming teleport request. |

| `/tpahere <player>` | Requests that another player teleport to you. |

| `/warp <name>` | Teleports you to a server warp. |

| `/warps` | Shows the available server warps. |

| `/warpinfo <name>` | Shows information about a warp. |

## Server Setup

For server owners, here is a guide on how to set it up.

### Requirements

1. LuckPerms

2. Vault

### Starting Up

In game, run `/lp editor`.

Go to the default group in the editor. You can add the following permission for each command.

## EssentialsX Commands

This table lists the main permission required to access each EssentialsX command. Some commands also have extra permissions for actions such as targeting other players, bypassing limits, using specific items, or accessing individual warps and kits.

| Command | Permission | What it does |

|---|---|---|

| `/afk` | `essentials.afk` | Marks you as away-from-keyboard. |

| `/antioch` | `essentials.antioch` | A little surprise for operators. |

| `/anvil` | `essentials.anvil` | Opens an anvil. |

| `/back` | `essentials.back` | Teleports you to your location before teleporting, spawning, or warping. |

| `/backup` | `essentials.backup` | Runs the server backup if configured. |

| `/balance` | `essentials.balance` | Shows a player's current balance. |

| `/balancetop` | `essentials.balancetop` | Shows the players with the highest balances. |

| `/ban` | `essentials.ban` | Bans a player. |

| `/banip` | `essentials.banip` | Bans an IP address. |

| `/beezooka` | `essentials.beezooka` | Throws an exploding bee. |

| `/bigtree` | `essentials.bigtree` | Spawns a large tree where you are looking. |

| `/book` | `essentials.book` | Allows reopening and editing signed books. |

| `/bottom` | `essentials.bottom` | Teleports to the lowest safe block at your current position. |

| `/break` | `essentials.break` | Breaks the block you are looking at. |

| `/broadcast` | `essentials.broadcast` | Broadcasts a message to the entire server. |

| `/broadcastworld` | `essentials.broadcastworld` | Broadcasts a message to a specific world. |

| `/burn` | `essentials.burn` | Sets a player on fire. |

| `/cartographytable` | `essentials.cartographytable` | Opens a cartography table. |

| `/clearinventory` | `essentials.clearinventory` | Clears the selected player's inventory. |

| `/clearinventoryconfirmtoggle` | `essentials.clearinventoryconfirmtoggle` | Toggles inventory-clear confirmation prompts. |

| `/compass` | `essentials.compass` | Shows your current direction. |

| `/condense` | `essentials.condense` | Converts items into more compact forms, such as ingots into blocks. |

| `/createkit` | `essentials.createkit` | Creates a kit in game. |

| `/customtext` | `essentials.customtext` | Allows access to configured custom-text commands. |

| `/delhome` | `essentials.delhome` | Deletes a home. |

| `/deljail` | `essentials.deljail` | Deletes a jail. |

| `/delkit` | `essentials.delkit` | Deletes a kit. |

| `/delwarp` | `essentials.delwarp` | Deletes a warp. |

| `/depth` | `essentials.depth` | Shows your depth relative to sea level. |

| `/discord` | `essentials.discord` | Shows the server's Discord invitation. |

| `/discordbroadcast` | `essentials.discordbroadcast` | Broadcasts a message to a Discord channel. |

| `/disposal` | `essentials.disposal` | Opens a portable disposal inventory. |

| `/eco` | `essentials.eco` | Manages player balances and the server economy. |

| `/editsign` | `essentials.editsign` | Edits a sign in the world. |

| `/enchant` | `essentials.enchant` | Enchants the item being held. |

| `/enderchest` | `essentials.enderchest` | Opens an Ender Chest. |

| `/essentials` | `essentials.essentials` | Shows EssentialsX information or reloads the plugin. |

| `/exp` | `essentials.exp` | Gives, sets, resets, or checks player experience. |

| `/ext` | `essentials.ext` | Extinguishes a player. |

| `/feed` | `essentials.feed` | Restores a player's hunger. |

| `/fireball` | `essentials.fireball` | Launches a fireball or another projectile. |

| `/firework` | `essentials.firework` | Creates or modifies fireworks. |

| `/fly` | `essentials.fly` | Enables or disables flight. |

| `/gamemode` | `essentials.gamemode` | Changes a player's game mode. |

| `/gc` | `essentials.gc` | Shows memory, uptime, TPS, and server information. |

| `/getpos` | `essentials.getpos` | Shows your coordinates or another player's coordinates. |

| `/give` | `essentials.give` | Gives an item to a player. |

| `/god` | `essentials.god` | Enables or disables god mode. |

| `/grindstone` | `essentials.grindstone` | Opens a grindstone. |

| `/hat` | `essentials.hat` | Places the item in your hand on your head. |

| `/heal` | `essentials.heal` | Restores a player's health. |

| `/help` | `essentials.help` | Shows available commands. |

| `/helpop` | `essentials.helpop` | Sends a message to online server staff. |

| `/home` | `essentials.home` | Teleports to a home. |

| `/ice` | `essentials.ice` | Freezes or cools a player. |

| `/ignore` | `essentials.ignore` | Ignores or stops ignoring another player. |

| `/info` | `essentials.info` | Shows server information configured by the owner. |

| `/invsee` | `essentials.invsee` | Opens another player's inventory. |

| `/item` | `essentials.item` | Gives yourself an item. |

| `/itemdb` | `essentials.itemdb` | Searches for an item name or ID. |

| `/itemlore` | `essentials.itemlore` | Edits an item's lore. |

| `/itemname` | `essentials.itemname` | Renames an item. |

| `/jailedplayers` | `essentials.jailedplayers` | Lists jailed players. |

| `/jails` | `essentials.jails` | Lists available jails. |

| `/jump` | `essentials.jump` | Teleports to the block you are looking at. |

| `/kick` | `essentials.kick` | Kicks a player from the server. |

| `/kickall` | `essentials.kickall` | Kicks every player except the command sender. |

| `/kill` | `essentials.kill` | Kills a selected player. |

| `/kit` | `essentials.kit` | Claims a kit or lists available kits. |

| `/kitreset` | `essentials.kitreset` | Resets a kit's cooldown. |

| `/kittycannon` | `essentials.kittycannon` | Launches an exploding kitten. |

| `/lightning` | `essentials.lightning` | Strikes lightning at a player or location. |

| `/link` | `essentials.link` | Generates a code to link Minecraft and Discord accounts. |

| `/list` | `essentials.list` | Lists online players. |

| `/loom` | `essentials.loom` | Opens a loom. |

| `/mail` | `essentials.mail` | Reads, sends, or clears in-game mail. |

| `/me` | `essentials.me` | Sends an action-style chat message. |

| `/more` | `essentials.more` | Fills the held item stack to its maximum amount. |

| `/motd` | `essentials.motd` | Shows the message of the day. |

| `/msg` | `essentials.msg` | Sends a private message to another player. |

| `/msgtoggle` | `essentials.msgtoggle` | Enables or disables receiving private messages. |

| `/mute` | `essentials.mute` | Mutes or unmutes a player. |

| `/near` | `essentials.near` | Lists nearby players. |

| `/nick` | `essentials.nick` | Changes a player's nickname. |

| `/nuke` | `essentials.nuke` | Drops dangerous entities or items around players. |

| `/pay` | `essentials.pay` | Sends money to another player. |

| `/payconfirmtoggle` | `essentials.payconfirmtoggle` | Toggles payment confirmation prompts. |

| `/paytoggle` | `essentials.paytoggle` | Toggles whether you accept payments. |

| `/ping` | `essentials.ping` | Checks whether the server is responding. |

| `/playtime` | `essentials.playtime` | Shows a player's total playtime. |

| `/potion` | `essentials.potion` | Adds effects to a potion. |

| `/powertool` | `essentials.powertool` | Assigns a command to the held item. |

| `/powertoollist` | `essentials.powertoollist` | Lists assigned power tools. |

| `/powertooltoggle` | `essentials.powertooltoggle` | Enables or disables your power tools. |

| `/ptime` | `essentials.ptime` | Changes a player's personal time. |

| `/pweather` | `essentials.pweather` | Changes a player's personal weather. |

| `/r` | `essentials.msg` | Replies to the most recent private message. |

| `/realname` | `essentials.realname` | Shows the username behind a nickname. |

| `/recipe` | `essentials.recipe` | Shows an item's crafting recipe. |

| `/remove` | `essentials.remove` | Removes selected entities from the world. |

| `/renamehome` | `essentials.renamehome` | Renames a home. |

| `/repair` | `essentials.repair` | Repairs held items or all equipped items. |

| `/rest` | `essentials.rest` | Resets a player's time since sleeping. |

| `/rtoggle` | `essentials.rtoggle` | Changes how the reply command selects its recipient. |

| `/rules` | `essentials.rules` | Shows the server rules. |

| `/seen` | `essentials.seen` | Shows when a player was last online. |

| `/sell` | `essentials.sell` | Sells the item in your hand. |

| `/sethome` | `essentials.sethome` | Creates a home at your current location. |

| `/setjail` | `essentials.setjail` | Creates a jail at your current location. |

| `/setspawn` | `essentials.setspawn` | Sets the server spawn. |

| `/settpr` | `essentials.settpr` | Configures the random-teleport location and settings. |

| `/setwarp` | `essentials.setwarp` | Creates a warp. |

| `/setworth` | `essentials.setworth` | Sets an item's selling value. |

| `/setxmpp` | `essentials.setxmpp` | Sets your XMPP address. |

| `/showkit` | `essentials.showkit` | Shows the contents of a kit. |

| `/skull` | `essentials.skull` | Changes or gives a player head. |

| `/smithingtable` | `essentials.smithingtable` | Opens a smithing table. |

| `/socialspy` | `essentials.socialspy` | Shows private messages and mail sent by other players. |

| `/spawn` | `essentials.spawn` | Teleports to the server spawn. |

| `/spawner` | `essentials.spawner` | Changes the mob type of a spawner. |

| `/spawnmob` | `essentials.spawnmob` | Spawns a mob. |

| `/speed` | `essentials.speed` | Changes walking or flying speed. |

| `/stonecutter` | `essentials.stonecutter` | Opens a stonecutter. |

| `/sudo` | `essentials.sudo` | Makes another player execute a command or chat message. |

| `/suicide` | `essentials.suicide` | Respawns your in-game character. |

| `/tempban` | `essentials.tempban` | Temporarily bans a player. |

| `/tempbanip` | `essentials.tempbanip` | Temporarily bans an IP address. |

| `/thunder` | `essentials.thunder` | Enables or disables thunderstorms. |

| `/time` | `essentials.time` | Shows or changes the world's time. |

| `/togglejail` | `essentials.togglejail` | Jails or releases a player. |

| `/toggleshout` | `essentials.toggleshout` | Toggles shout chat mode. |

| `/top` | `essentials.top` | Teleports to the highest safe block above you. |

| `/tp` | `essentials.tp` | Teleports to another player. |

| `/tpa` | `essentials.tpa` | Requests to teleport to another player. |

| `/tpaall` | `essentials.tpaall` | Requests that every online player teleport to you. |

| `/tpacancel` | `essentials.tpacancel` | Cancels outstanding teleport requests. |

| `/tpaccept` | `essentials.tpaccept` | Accepts an incoming teleport request. |

| `/tpahere` | `essentials.tpahere` | Requests that another player teleport to you. |

| `/tpall` | `essentials.tpall` | Teleports every online player to another player. |

| `/tpauto` | `essentials.tpauto` | Automatically accepts teleport requests. |

| `/tpdeny` | `essentials.tpdeny` | Rejects a teleport request. |

| `/tphere` | `essentials.tphere` | Teleports another player to you. |

| `/tpo` | `essentials.tpo` | Teleports while bypassing teleport restrictions. |

| `/tpoffline` | `essentials.tpoffline` | Teleports to an offline player's last location. |

| `/tpohere` | `essentials.tpohere` | Teleports another player to you while bypassing restrictions. |

| `/tppos` | `essentials.tppos` | Teleports to specific coordinates. |

| `/tpr` | `essentials.tpr` | Randomly teleports you. |

| `/tptoggle` | `essentials.tptoggle` | Blocks or allows incoming teleports. |

| `/tree` | `essentials.tree` | Spawns a tree where you are looking. |

| `/unban` | `essentials.unban` | Unbans a player. |

| `/unbanip` | `essentials.unbanip` | Unbans an IP address. |

| `/unlimited` | `essentials.unlimited` | Provides unlimited placement or use of selected items. |

| `/unlink` | `essentials.unlink` | Unlinks your Minecraft account from Discord. |

| `/vanish` | `essentials.vanish` | Hides you from other players. |

| `/warp` | `essentials.warp` | Lists warps or teleports to a warp. |

| `/warpinfo` | `essentials.warpinfo` | Shows information about a warp. |

| `/weather` | `essentials.weather` | Changes the world's weather. |

| `/whois` | `essentials.whois` | Shows information about a player. |

| `/workbench` | `essentials.workbench` | Opens a crafting table. |

| `/world` | `essentials.world` | Teleports between worlds. |

| `/worth` | `essentials.worth` | Shows the selling value of an item. |

| `/xmpp` | `essentials.xmpp` | Sends an XMPP message to a player. |

| `/xmppspy` | `essentials.xmppspy` | Toggles spying on XMPP messages. |