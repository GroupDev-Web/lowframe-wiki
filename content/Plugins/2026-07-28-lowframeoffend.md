---
title: LowFrameOffend
draft: false
---
# LowFrame Offend

LowFrame Offend is a private punishment plugin developed by **LowFrameMC** for use on **LowFrame**.

It allows authorized staff members to punish players using predefined offense types. The plugin records previous offenses and automatically applies the correct punishment length for repeat offenses.

## How Offenses Work

An authorized staff member runs:

`/offend <player> <offense>`

Example:

`/offend ExamplePlayer esp`

LowFrame Offend will:

1. Check the player's previous offenses.

2. Select the correct punishment length.

3. Record the new offense.

4. Ban the player.

5. Show the punishment reason.

6. Show how long remains until the punishment expires.

A temporary punishment message may look similar to:

`You have been banned from LowFrame.`

`Reason:`

`Hacking is not permitted on this server.`

`You have 29 days, 23 hours, and 59 seconds until you are unbanned.`

Permanent punishments do not expire automatically.

# Offense Types

## ESP and Hacking

Command:

`/offend <player> esp`

Example:

`/offend ExamplePlayer esp`

Reason:

`Hacking is not permitted on this server.`

Punishments:

- First offense: 30 days

- Second offense: 50 days

- Third offense and later: Permanent ban

This offense may be used for unfair modifications or cheats such as:

- ESP

- X-ray

- KillAura

- Reach

- Speed hacks

- Fly hacks

- Other unauthorized client modifications

Staff members should collect enough evidence before issuing this punishment.

## Destruction and Griefing

Command:

`/offend <player> dest`

Example:

`/offend ExamplePlayer dest`

Reason:

`Griefing is not permitted on this server.`

Punishments:

- First offense: 50 days

- Second offense and later: Permanent ban

This offense may be used when a player intentionally damages another player's property or important server builds.

Examples include:

- Destroying another player's base

- Damaging public builds

- Destroying farms

- Using fire or lava to damage builds

- Intentionally ruining another player's land

- Repeatedly stealing protected items

## Hidden OP Loot

Command:

`/offend <player> hl`

Example:

`/offend ExamplePlayer hl`

Reason:

`Please do not give yourself OP loot with creative and commands and hide it from admins.`

Punishments:

- First offense: 10 days

- Every later offense: 20 days

This offense may be used when someone:

- Gives themselves unauthorized items

- Uses Creative mode for personal items

- Uses commands to create overpowered equipment

- Hides illegitimate items from administrators

- Stores unauthorized items in hidden containers

- Gives unauthorized overpowered items to other players

## Custom Offense

Command format:

`/offend <player> cstm <length> <reason>`

A custom offense allows authorized staff members to choose the punishment length and reason.

Use custom punishments only when none of the predefined offense types properly apply.

### Permanent Custom Punishment

Use `p` for a permanent ban.

Example:

`/offend ExamplePlayer cstm p Repeatedly attempting to crash the server.`

### Custom Punishment in Days

Add `d` after the number of days.

Example:

`/offend ExamplePlayer cstm 7d Repeatedly disrupting other players.`

### Custom Punishment in Weeks

Add `w` after the number of weeks.

Example:

`/offend ExamplePlayer cstm 2w Evading a previous punishment.`

### Custom Punishment in Years

Add `y` after the number of years.

Example:

`/offend ExamplePlayer cstm 1y Severe abuse of server systems.`

The custom reason is shown on the punishment screen and recorded in the player's offense history.

# Removing Offenses

Only remove an offense when it was issued incorrectly or officially overturned.

## Remove the Latest Offense

Run:

`/un-offend <player>`

Example:

`/un-offend ExamplePlayer`

This removes the player's latest recorded offense.

## Remove a Specific Offense Type

Run:

`/un-offend <player> <offense>`

Examples:

`/un-offend ExamplePlayer esp`

`/un-offend ExamplePlayer dest`

`/un-offend ExamplePlayer hl`

`/un-offend ExamplePlayer cstm`

This removes the selected offense from the player's recorded history.

## Remove All Offenses

Run:

`/un-offend <player> all`

Example:

`/un-offend ExamplePlayer all`

This clears all recorded LowFrame Offend history for that player.

Use this carefully. Future punishments may be treated as first offenses after the history is cleared.

# Staff Access

## Grant Offend Access

Run:

`/grant-offend <player>`

Example:

`/grant-offend ModeratorName`

This allows the selected player to use LowFrame Offend commands without needing operator status.

Only trusted staff members should receive access.

## Who Can Use LowFrame Offend?

Access may be available to:

- The server console

- Server operators

- Players granted access through `/grant-offend`

- Players with the required permission

LowFrame Offend is not restricted to only one username.

# Permissions

## Use the Offend Command

`lowframeoffend.offend`

Example LuckPerms command for a staff group:

`/lp group admin permission set lowframeoffend.offend true`

Example for one player:

`/lp user ExamplePlayer permission set lowframeoffend.offend true`

Only trusted staff members should receive this permission.

## Remove Offenses

`lowframeoffend.unoffend`

Example:

`/lp group admin permission set lowframeoffend.unoffend true`

This permission allows staff members to remove recorded offenses.

## Grant Command Access

`lowframeoffend.grant`

Example:

`/lp group owner permission set lowframeoffend.grant true`

This should normally be limited to owners or senior administrators.

# Staff Guidelines

Before issuing an offense, staff members should:

1. Confirm the player's exact username.

2. Confirm the correct offense type.

3. Review the available evidence.

4. Check whether another staff member already handled the report.

5. Avoid issuing the same punishment twice.

6. Use custom offenses only when necessary.

7. Record important evidence in the staff system.

8. Explain the punishment clearly when required.

Do not use LowFrame Offend:

- As a joke

- For personal disagreements

- Without reasonable evidence

- To threaten players

- To punish someone for behavior that is not against the rules

- To increase punishments without authorization

Every punishment must have a valid LowFrame rule-related reason.

# Server Setup

Server setup is not available for this plugin.

LowFrame Offend is a private plugin developed by **LowFrameMC** specifically for use on **LowFrame**. The plugin file, source code, configuration, and installation instructions are not publicly available.

# Troubleshooting

## Unknown Command

If `/offend` is unknown, contact a LowFrame owner or developer.

The command may be unavailable because:

- The plugin is temporarily disabled

- The current server does not have LowFrame Offend

- The command was entered incorrectly

- The server is undergoing maintenance

## No Permission

The staff member may need:

`lowframeoffend.offend`

They may also need access granted through:

`/grant-offend <player>`

Contact a LowFrame owner if access should be provided.

## Player Received the Wrong Punishment Length

LowFrame Offend uses the player's previous offense history to determine punishment length.

A longer punishment may mean that the player already has a recorded offense.

Staff should verify the player's history before removing or changing the punishment.

## Offense Was Issued by Mistake

Remove the incorrect offense using:

`/un-offend <player> <offense>`

Example:

`/un-offend ExamplePlayer esp`

The player may also need to be unbanned using the normal server unban command.

## Custom Offense Does Not Work

Use the full format:

`/offend <player> cstm <length> <reason>`

Correct example:

`/offend ExamplePlayer cstm 14d Repeated rule violations.`

The custom offense requires:

- A player name

- The `cstm` offense type

- A valid length

- A reason

Valid custom lengths include:

- `7d`

- `2w`

- `1y`

- `p`

## Ban Countdown Looks Incorrect

Contact a LowFrame owner or developer.

Possible causes include:

- Incorrect server time

- An invalid custom punishment length

- Damaged punishment data

- An older plugin version

- A server restart during punishment processing

## Offense History Is Missing

Contact a LowFrame owner or developer.

Do not issue repeated test punishments while the history system is being checked.

# Updating LowFrame Offend

LowFrame Offend updates are handled privately by **LowFrameMC**.

Public downloads, update files, source code, and setup instructions are not available.

LowFrame staff should contact an authorized LowFrameMC developer when the plugin requires an update or repair.