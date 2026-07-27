---
title: EssentialsX
draft: false
---
# EssentialsX

EssentialsX is a plugin for paper, bukkit, and spigot servers that contains all of the essential commands for a server such as /tpa, /sethome, and more.  

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
In game, run /lp editor  
Go to the default group in the editor. You can add the following permission for the command.  
# EssentialsX Commands

This table lists the main permission required to access each EssentialsX command. Some commands also have extra permissions for actions such as targeting other players, bypassing limits, using specific items, or accessing individual warps and kits.

| Command | Permission | What it does |

|---|---|---|

| `/afk` | `essentials.afk` | Marks you as away-from-keyboard. |

| `/antioch` | `essentials.antioch` | A little surprise for operators. |

| `/anvil` | `essentials.anvil` | Opens up an Anvil. |

| `/back` | `essentials.back` | Teleports you to your location prior to tp/spawn/warp. |

| `/backup` | `essentials.backup` | Runs the backup if configured. |

| `/balance` | `essentials.balance` | States the current balance of a player. |

| `/balancetop` | `essentials.balancetop` | Gets the top balance values. |

| `/ban` | `essentials.ban` | Bans a player. |

| `/banip` | `essentials.banip` | Bans an IP address. |

| `/beezooka` | `essentials.beezooka` | Throw an exploding bee at your opponent. |

| `/bigtree` | `essentials.bigtree` | Spawn a big tree where you are looking. |

| `/book` | `essentials.book` | Allows reopening and editing of sealed books. |

| `/bottom` | `essentials.bottom` | Teleport to the lowest block at your current position. |

| `/break` | `essentials.break` | Breaks the block you are looking at. |

| `/broadcast` | `essentials.broadcast` | Broadcasts a message to the entire server. |

| `/broadcastworld` | `essentials.broadcastworld` | Broadcasts a message to a world. |

| `/burn` | `essentials.burn` | Set a player on fire. |

| `/cartographytable` | `essentials.cartographytable` | Opens up a cartography table. |

| `/clearinventory` | `essentials.clearinventory` | Clear all items in your inventory. |

| `/clearinventoryconfirmtoggle` | `essentials.clearinventoryconfirmtoggle` | Toggles whether you are prompted to confirm inventory clears. |

| `/compass` | `essentials.compass` | Describes your current bearing. |

| `/condense` | `essentials.condense` | Condenses items into a more compact blocks. |

| `/createkit` | `essentials.createkit` | Create a kit in game! |

| `/customtext` | `essentials.customtext` | Allows you to create custom text commands. |

| `/delhome` | `essentials.delhome` | Removes a home. |

| `/deljail` | `essentials.deljail` | Removes a jail. |

| `/delkit` | `essentials.delkit` | Deletes the specified kit. |

| `/delwarp` | `essentials.delwarp` | Deletes the specified warp. |

| `/depth` | `essentials.depth` | States current depth, relative to sea level. |

| `/discord` | `essentials.discord` | Sends the discord invite link to the player. |

| `/discordbroadcast` | `essentials.discordbroadcast` | Broadcasts a message to the specified Discord channel. |

| `/disposal` | `essentials.disposal` | Opens a portable disposal menu. |

| `/eco` | `essentials.eco` | Manages the server economy. |

| `/editsign` | `essentials.editsign` | Edits a sign in the world. |

| `/enchant` | `essentials.enchant` | Enchants the item the user is holding. |

| `/enderchest` | `essentials.enderchest` | Lets you see inside an enderchest. |

| `/essentials` | `essentials.essentials` | Reloads essentials. |

| `/exp` | `essentials.exp` | Give, set, reset, or look at a players experience. |

| `/ext` | `essentials.ext` | Extinguish players. |

| `/feed` | `essentials.feed` | Satisfy the hunger. |

| `/fireball` | `essentials.fireball` | Throw a fireball or other assorted projectiles. |

| `/firework` | `essentials.firework` | Allows you to modify a stack of fireworks. |

| `/fly` | `essentials.fly` | Take off, and soar! |

| `/gamemode` | `essentials.gamemode` | Change player gamemode. |

| `/gc` | `essentials.gc` | Reports memory, uptime and tick info. |

| `/getpos` | `essentials.getpos` | Get your current coordinates or those of a player. |

| `/give` | `essentials.give` | Give a player an item. |

| `/god` | `essentials.god` | Enables your godly powers. |

| `/grindstone` | `essentials.grindstone` | Opens up a grindstone. |

| `/hat` | `essentials.hat` | Get some cool new headgear. |

| `/heal` | `essentials.heal` | Heals you or the given player. |

| `/help` | `essentials.help` | Views a list of available commands. |

| `/helpop` | `essentials.helpop` | Message online admins. |

| `/home` | `essentials.home` | Teleport to your home. |

| `/ice` | `essentials.ice` | Cools a player off. |

| `/ignore` | `essentials.ignore` | Ignore or unignore other players. |

| `/info` | `essentials.info` | Shows information set by the server owner. |

| `/invsee` | `essentials.invsee` | See the inventory of other players. |

| `/item` | `essentials.item` | Spawn an item. |

| `/itemdb` | `essentials.itemdb` | Searches for an item. |

| `/itemlore` | `essentials.itemlore` | Edit the lore of an item. |

| `/itemname` | `essentials.itemname` | Names an item. |

| `/jailedplayers` | `essentials.jailedplayers` | List all jailed players. |

| `/jails` | `essentials.jails` | List all jails. |

| `/jump` | `essentials.jump` | Jumps to the nearest block in the line of sight. |

| `/kick` | `essentials.kick` | Kicks a specified player with a reason. |

| `/kickall` | `essentials.kickall` | Kicks all players off the server except the issuer. |

| `/kill` | `essentials.kill` | Kills specified player. |

| `/kit` | `essentials.kit` | Obtains the specified kit or views all available kits. |

| `/kitreset` | `essentials.kitreset` | Resets the cooldown on the specified kit. |

| `/kittycannon` | `essentials.kittycannon` | Throw an exploding kitten at your opponent. |

| `/lightning` | `essentials.lightning` | The power of Thor. Strike at cursor or player. |

| `/link` | `essentials.link` | Generates a code to link your Minecraft account to Discord. |

| `/list` | `essentials.list` | List all online players. |

| `/loom` | `essentials.loom` | Opens up a loom. |

| `/mail` | `essentials.mail` | Manages inter-player, intra-server mail. |

| `/me` | `essentials.me` | Describes an action in the context of the player. |

| `/more` | `essentials.more` | Fills the item stack in hand to specified amount, or to maximum size if none is specified. |

| `/motd` | `essentials.motd` | Views the Message Of The Day. |

| `/msg` | `essentials.msg` | Sends a private message to the specified player. |

| `/msgtoggle` | `essentials.msgtoggle` | Blocks receiving all private messages. |

| `/mute` | `essentials.mute` | Mutes or unmutes a player. |

| `/near` | `essentials.near` | Lists the players near by or around a player. |

| `/nick` | `essentials.nick` | Change your nickname or that of another player. |

| `/nuke` | `essentials.nuke` | May death rain upon them. |

| `/pay` | `essentials.pay` | Pays another player from your balance. |

| `/payconfirmtoggle` | `essentials.payconfirmtoggle` | Toggles whether you are prompted to confirm payments. |

| `/paytoggle` | `essentials.paytoggle` | Toggles whether you are accepting payments. |

| `/ping` | `essentials.ping` | Pong! |

| `/playtime` | `essentials.playtime` | Shows a player's time played in game |

| `/potion` | `essentials.potion` | Adds custom potion effects to a potion. |

| `/powertool` | `essentials.powertool` | Assigns a command to the item in hand. |

| `/powertoollist` | `essentials.powertoollist` | Lists all current powertools. |

| `/powertooltoggle` | `essentials.powertooltoggle` | Enables or disables all current powertools. |

| `/ptime` | `essentials.ptime` | Adjust player's client time. Add @ prefix to fix. |

| `/pweather` | `essentials.pweather` | Adjust a player's weather |

| `/r` | `essentials.msg` | Quickly reply to the last player to message you. |

| `/realname` | `essentials.realname` | Displays the username of a user based on nick. |

| `/recipe` | `essentials.recipe` | Displays how to craft items. |

| `/remove` | `essentials.remove` | Removes entities in your world. |

| `/renamehome` | `essentials.renamehome` | Renames a home. |

| `/repair` | `essentials.repair` | Repairs the durability of one or all items. |

| `/rest` | `essentials.rest` | Rests you or the given player. |

| `/rtoggle` | `essentials.rtoggle` | Change whether the recipient of the reply is last recipient or last sender |

| `/rules` | `essentials.rules` | Views the server rules. |

| `/seen` | `essentials.seen` | Shows the last logout time of a player. |

| `/sell` | `essentials.sell` | Sells the item currently in your hand. |

| `/sethome` | `essentials.sethome` | Set your home to your current location. |

| `/setjail` | `essentials.setjail` | Creates a jail where you specified named [jailname]. |

| `/setspawn` | `essentials.setspawn` | Sets the spawn point to your current position. |

| `/settpr` | `essentials.settpr` | Set the random teleport location and parameters. |

| `/setwarp` | `essentials.setwarp` | Creates a new warp. |

| `/setworth` | `essentials.setworth` | Set the sell value of an item. |

| `/setxmpp` | `essentials.setxmpp` | Sets your XMPP address. |

| `/showkit` | `essentials.showkit` | Show contents of a kit. |

| `/skull` | `essentials.skull` | Set the owner of a player skull |

| `/smithingtable` | `essentials.smithingtable` | Opens up a smithing table. |

| `/socialspy` | `essentials.socialspy` | Toggles if you can see msg/mail commands in chat. |

| `/spawn` | `essentials.spawn` | Teleports to the spawn point. |

| `/spawner` | `essentials.spawner` | Change the mob type of a spawner. |

| `/spawnmob` | `essentials.spawnmob` | Spawns a mob. |

| `/speed` | `essentials.speed` | Change your speed limits. |

| `/stonecutter` | `essentials.stonecutter` | Opens up a stonecutter. |

| `/sudo` | `essentials.sudo` | Make another user perform a command. |

| `/suicide` | `essentials.suicide` | Causes you to perish. |

| `/tempban` | `essentials.tempban` | Temporary ban a user. |

| `/tempbanip` | `essentials.tempbanip` | Temporarily ban an IP Address. |

| `/thunder` | `essentials.thunder` | Enable/disable thunder. |

| `/time` | `essentials.time` | Display/Change the world time. Defaults to current world. |

| `/togglejail` | `essentials.togglejail` | Jails/Unjails a player, TPs them to the jail specified. |

| `/toggleshout` | `essentials.toggleshout` | Toggles whether you are talking in shout mode |

| `/top` | `essentials.top` | Teleport to the highest block at your current position. |

| `/tp` | `essentials.tp` | Teleport to a player. |

| `/tpa` | `essentials.tpa` | Request to teleport to the specified player. |

| `/tpaall` | `essentials.tpaall` | Requests all players online to teleport to you. |

| `/tpacancel` | `essentials.tpacancel` | Cancel all outstanding teleport requests. Specify [player] to cancel requests with them. |

| `/tpaccept` | `essentials.tpaccept` | Accepts teleport requests. |

| `/tpahere` | `essentials.tpahere` | Request that the specified player teleport to you. |

| `/tpall` | `essentials.tpall` | Teleport all online players to another player. |

| `/tpauto` | `essentials.tpauto` | Automatically accept teleportation requests. |

| `/tpdeny` | `essentials.tpdeny` | Rejects teleport requests. |

| `/tphere` | `essentials.tphere` | Teleport a player to you. |

| `/tpo` | `essentials.tpo` | Teleport override for tptoggle. |

| `/tpoffline` | `essentials.tpoffline` | Teleport to a player's last known logout location |

| `/tpohere` | `essentials.tpohere` | Teleport here override for tptoggle. |

| `/tppos` | `essentials.tppos` | Teleport to coordinates. |

| `/tpr` | `essentials.tpr` | Teleport randomly. |

| `/tptoggle` | `essentials.tptoggle` | Blocks all forms of teleportation. |

| `/tree` | `essentials.tree` | Spawn a tree where you are looking. |

| `/unban` | `essentials.unban` | Unbans the specified player. |

| `/unbanip` | `essentials.unbanip` | Unbans the specified IP address. |

| `/unlimited` | `essentials.unlimited` | Allows the unlimited placing of items. |

| `/unlink` | `essentials.unlink` | Unlinks your Minecraft account from any associated Discord account. |

| `/vanish` | `essentials.vanish` | Hide yourself from other players. |

| `/warp` | `essentials.warp` | List all warps or warp to the specified location. |

| `/warpinfo` | `essentials.warpinfo` | Finds location information for a specified warp. |

| `/weather` | `essentials.weather` | Sets the weather. |

| `/whois` | `essentials.whois` | Determine basic information about the specified player. |

| `/workbench` | `essentials.workbench` | Opens up a workbench. |

| `/world` | `essentials.world` | Switch between worlds. |

| `/worth` | `essentials.worth` | Calculates the worth of items in hand or as specified. |

| `/xmpp` | `essentials.xmpp` | Sends a message to a player. |

| `/xmppspy` | `essentials.xmppspy` | Toggles XMPP spy for all messages. |



&nbsp;