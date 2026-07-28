---
title: ExcellentEconomy
draft: false
---
# ExcellentEconomy

ExcellentEconomy is a server economy plugin that allows LowFrame to manage money and other virtual currencies.

A server can have one currency or multiple currencies, such as:

- Money

- Coins

- Tokens

- Points

- Event currency

The exact commands available depend on how the server owner configured each currency.

## Player Commands

### Check Your Balance

Use:

`/balance`

This shows the balance of the server's primary currency.

A currency may also have its own command. For example:

`/coins balance`

### Check Another Player's Balance

Use:

`/balance <player>`

Example:

`/balance YTRift`

This may require an additional permission.

### Pay Another Player

Use:

`/pay <player> <amount>`

Example:

`/pay YTRift 500`

This sends money from your balance to another player.

Some currencies may use their own command:

`/coins pay <player> <amount>`

### Toggle Payments

Use:

`/paytoggle`

This controls whether other players are allowed to send money to you.

A currency-specific version may look like:

`/coins payments`

### View the Richest Players

Use:

`/baltop`

This displays the leaderboard for the server's primary currency.

A currency-specific version may look like:

`/coins top`

You can open another page using:

`/coins top <page>`

### View Your Wallet

Use:

`/wallet`

The wallet shows all currencies available to you and your balance for each one.

The wallet must be enabled by the server owner.

### Exchange Currencies

Some currencies may be exchanged for another currency.

Use:

`/coins exchange <currency> <amount>`

Example:

`/coins exchange tokens 100`

Exchange rates and available currencies are controlled by the server owner.

## Amount Shortcuts

ExcellentEconomy supports shorter ways of writing large amounts.

Examples:

- `1k` means `1,000`

- `10k` means `10,000`

- `1m` means `1,000,000`

Example:

`/pay YTRift 25k`

This sends `25,000` of the primary currency.

## Payment Problems

### You Do Not Have Enough Money

You cannot pay more money than is available in your balance.

Check your balance using:

`/balance`

### The Player Is Not Accepting Payments

The other player may have disabled payments using `/paytoggle`.

They must enable payments before you can send money to them.

### The Currency Command Does Not Work

Currency command names can be customized by the server owner.

For example, a currency may use:

- `/coins`

- `/money`

- `/tokens`

- `/points`

Check the server's command list or contact a staff member.

# Installation for Server Owners

ExcellentEconomy is installed as a server plugin. Players do not need to install anything on their computers.

## Requirements

ExcellentEconomy requires:

- A supported Paper or Spigot server

- A compatible Java version

- NightCore

Current ExcellentEconomy releases for modern Minecraft versions may require Java 25.

Folia is not currently supported.

Optional integrations include:

- Vault

- PlaceholderAPI

Vault allows shops, crates, claims, and other plugins to use ExcellentEconomy as the server's economy provider.

PlaceholderAPI allows balances and leaderboard information to be displayed in scoreboards, chat, menus, holograms, and other plugins.

## Installing ExcellentEconomy

1. Stop the Minecraft server.

2. Download ExcellentEconomy.

3. Download the required NightCore version.

4. Upload both `.jar` files to the server's `plugins` folder.

5. Start the server.

6. Wait for the configuration files to generate.

7. Check the console for errors.

8. Stop the server before editing major configuration settings.

The files will be generated inside:

`plugins/ExcellentEconomy`

Run:

`/plugins`

ExcellentEconomy and NightCore should both appear in green.

## Main Plugin Commands

The default main command aliases are:

`/execo`

`/excellenteconomy`

Some configurations or documentation may also use:

`/coe`

The aliases can be changed inside:

`plugins/ExcellentEconomy/engine.yml`

### Help

Use:

`/execo help`

This displays the available ExcellentEconomy commands.

### Reload

Use:

`/execo reload`

This reloads the plugin configuration.

Required permission:

`excellenteconomy.command.reload`

A full server restart is recommended after adding, deleting, or renaming currencies.

### Create a Currency

Use:

`/execo create <name> <symbol> <decimals>`

Example:

`/execo create money $ 2`

Another example:

`/execo create tokens ✦ 0`

The decimal value controls whether the currency supports values such as `$10.50`.

Use `0` for whole numbers only.

Required permission:

`excellenteconomy.command.create`

### Reset Everyone's Balance

Use:

`/execo resetall <currency>`

Example:

`/execo resetall tokens`

This resets the selected currency for every player.

Required permission:

`excellenteconomy.command.resetall`

Use this command carefully because it affects every player's balance.

### Migrate Economy Data

Use:

`/execo migrate <plugin> <currency>`

This imports balances from a supported economy plugin into an ExcellentEconomy currency.

Required permission:

`excellenteconomy.command.migrate`

Back up the server and database before migrating economy data.

## Currency Files

Every currency has its own YAML file inside:

`plugins/ExcellentEconomy/currencies`

Examples:

`plugins/ExcellentEconomy/currencies/money.yml`

`plugins/ExcellentEconomy/currencies/tokens.yml`

`plugins/ExcellentEconomy/currencies/points.yml`

The filename without `.yml` is the currency ID.

For example:

- `money.yml` has the ID `money`

- `tokens.yml` has the ID `tokens`

- `points.yml` has the ID `points`

Currency IDs are used in:

- Permissions

- Commands

- PlaceholderAPI placeholders

- Vault settings

- Exchange settings

## Currency Commands

The `/coins` command used below is only an example.

The actual command is controlled by the currency's command aliases.

### Check a Balance

`/coins balance [player]`

### Send Currency

`/coins pay <player> <amount>`

### Toggle Payments

`/coins payments [player]`

### Give Currency

`/coins give <player> <amount>`

Required permission:

`excellenteconomy.command.currency.add`

### Give Currency to All Online Players

`/coins giveall <amount>`

Required permission:

`excellenteconomy.command.currency.addall`

### Remove Currency

`/coins take <player> <amount>`

Required permission:

`excellenteconomy.command.currency.take`

### Set a Balance

`/coins set <player> <amount>`

Required permission:

`excellenteconomy.command.currency.set`

### Reset a Player's Balance

`/coins reset <player>`

This resets the player's balance for that currency.

### View the Leaderboard

`/coins top [page]`

Required permission:

`excellenteconomy.command.currency.top`

### Exchange Currency

`/coins exchange <currency> <amount>`

Required permission:

`excellenteconomy.command.currency.exchange`

## Command Flags

Administrative balance commands support optional flags.

### Silent Flag

`-s`

The target player will not receive a notification about the balance change.

Example:

`/coins give YTRift 500 -s`

### No-Feedback Flag

`-sf`

The command sender will not receive the normal feedback message.

Example:

`/coins give YTRift 500 -sf`

The flags can be combined:

`/coins give YTRift 500 -s -sf`

## Permissions

### All ExcellentEconomy Features

`excellenteconomy.*`

This grants every ExcellentEconomy permission.

Only give this to trusted administrators.

### Access Every Currency

`excellenteconomy.currency.*`

### Access One Currency

`excellenteconomy.currency.<currency>`

Replace `<currency>` with the currency ID.

Example:

`excellenteconomy.currency.money`

Example:

`excellenteconomy.currency.tokens`

### Access Every Command

`excellenteconomy.command.*`

### Check a Currency Balance

`excellenteconomy.command.currency.balance`

### Check Other Players' Balances

`excellenteconomy.command.currency.balance.others`

### Give Currency

`excellenteconomy.command.currency.add`

### Give Currency to Everyone

`excellenteconomy.command.currency.addall`

### Set a Balance

`excellenteconomy.command.currency.set`

### Remove Currency

`excellenteconomy.command.currency.take`

### Exchange Currency

`excellenteconomy.command.currency.exchange`

### Toggle Payments

`excellenteconomy.command.currency.payments`

### Toggle Payments for Other Players

`excellenteconomy.command.currency.payments.others`

### Send Currency

`excellenteconomy.command.currency.send`

### View Currency Leaderboards

`excellenteconomy.command.currency.top`

### Use the Wallet

`excellenteconomy.command.wallet`

### View Another Player's Wallet

`excellenteconomy.command.wallet.others`

### Create Currencies

`excellenteconomy.command.create`

### Reset Balances

`excellenteconomy.command.reset`

### Reset Everyone's Balances

`excellenteconomy.command.resetall`

### Migrate Economy Data

`excellenteconomy.command.migrate`

### Reload ExcellentEconomy

`excellenteconomy.command.reload`

### Hide a Player From Leaderboards

`excellenteconomy.hidefromtops`

## Recommended LuckPerms Setup

Replace `money` with your actual currency ID.

Allow players to access the money currency:

`/lp group default permission set excellenteconomy.currency.money true`

Allow players to check their balances:

`/lp group default permission set excellenteconomy.command.currency.balance true`

Allow players to send money:

`/lp group default permission set excellenteconomy.command.currency.send true`

Allow players to toggle payments:

`/lp group default permission set excellenteconomy.command.currency.payments true`

Allow players to view leaderboards:

`/lp group default permission set excellenteconomy.command.currency.top true`

Allow players to use the wallet:

`/lp group default permission set excellenteconomy.command.wallet true`

Only administrators should normally receive:

`excellenteconomy.command.currency.add`

`excellenteconomy.command.currency.addall`

`excellenteconomy.command.currency.take`

`excellenteconomy.command.currency.set`

`excellenteconomy.command.reset`

`excellenteconomy.command.resetall`

`excellenteconomy.command.migrate`

`excellenteconomy.command.reload`

## Vault Setup

Vault allows other plugins to use one ExcellentEconomy currency as the server's main economy.

Examples of plugins that may use Vault include:

- Shops

- Crates

- Land claims

- Auction houses

- Jobs

- Player markets

Install Vault by placing its `.jar` file inside:

`plugins`

Then open:

`plugins/ExcellentEconomy/config.yml`

Find the Vault integration section and configure it:

    Integration:

      Vault:

        Enabled: true

        EconomyCurrency: money

Replace `money` with the ID of the currency you want other plugins to use.

Restart the server after changing Vault settings.

Run:

`/vault-info`

Check that ExcellentEconomy appears as the active economy provider.

## PlaceholderAPI

ExcellentEconomy includes a PlaceholderAPI expansion.

Replace `[currency]` with a currency ID such as `money`.

### Formatted Player Balance

`%excellenteconomy_balance_[currency]%`

Example:

`%excellenteconomy_balance_money%`

### Clean Player Balance

`%excellenteconomy_balance_clean_[currency]%`

### Short Player Balance

`%excellenteconomy_balance_short_[currency]%`

This may display large values in a compact form, such as `1.5K`.

### Raw Player Balance

`%excellenteconomy_balance_raw_[currency]%`

### Player's Leaderboard Position

`%excellenteconomy_leaderboard_position_[currency]%`

### Top Player Name

`%excellenteconomy_top_player_name_[position]_[currency]%`

Example:

`%excellenteconomy_top_player_name_1_money%`

### Top Player Balance

`%excellenteconomy_top_balance_[position]_[currency]%`

Example:

`%excellenteconomy_top_balance_1_money%`

Leaderboards must be enabled for leaderboard placeholders to work.

## Database Setup

ExcellentEconomy supports local and external database storage.

### SQLite

SQLite is suitable for:

- One server

- Small or medium communities

- Simple setups

- Servers that do not need cross-server balance syncing

SQLite stores the economy data locally in the plugin folder.

### MySQL

MySQL is useful for:

- Multiple Minecraft servers

- Proxy networks

- Shared player balances

- Larger server networks

Every server sharing balances must connect to the same database and use matching currency settings.

Back up the database before changing storage types or migrating data.

## Customizing a Currency

Currency files can control features such as:

- Currency name

- Symbol

- Display formatting

- Starting balance

- Maximum balance

- Decimal support

- Command aliases

- Payment settings

- Minimum payment amount

- Currency exchanges

- Leaderboards

- Currency permissions

- Cross-server syncing

- Item icon

- Message prefix

After creating or changing a currency, restart the server if its commands do not update correctly.

## Leaderboards

Each currency can have its own leaderboard.

Leaderboards can be disabled inside the currency file:

    Leaderboard:

      Enabled: false

Set it to `true` to enable leaderboard commands and placeholders.

Players with this permission are hidden from the leaderboard:

`excellenteconomy.hidefromtops`

## Troubleshooting

### ExcellentEconomy Appears Red in `/plugins`

Check that:

- NightCore is installed.

- NightCore is the correct version.

- The server uses a supported Minecraft version.

- The server uses the required Java version.

- The plugin files are inside the `plugins` folder.

- The console does not report a dependency error.

### Currency Command Is Unknown

Check that:

- The currency file exists.

- Its command aliases are enabled.

- The YAML file has no formatting errors.

- The server was fully restarted.

- No other plugin already uses the command.

### Vault Plugins Do Not Detect the Economy

Check that:

- Vault is installed.

- Vault integration is enabled in `config.yml`.

- `EconomyCurrency` contains a valid currency ID.

- The server was restarted.

- `/vault-info` lists ExcellentEconomy as the economy provider.

### Players Cannot Use a Currency

Give them access to the currency:

`excellenteconomy.currency.<currency>`

Example:

`excellenteconomy.currency.money`

Also give the permissions for the commands they need.

### Balances Are Not Shared Between Servers

Check that:

- Every server uses the same MySQL database.

- The same currency ID exists on every server.

- Cross-server syncing is enabled.

- Database information is correct.

- Firewalls allow access to the database server.

### PlaceholderAPI Values Do Not Work

Check that:

- PlaceholderAPI is installed.

- The currency ID is correct.

- The placeholder starts and ends with `%`.

- The plugin using the placeholder supports PlaceholderAPI.

- Leaderboards are enabled for leaderboard placeholders.

### Changes Keep Resetting

Stop the server before editing configuration files.

Save the file while the server is stopped, then start it again.

## Updating ExcellentEconomy

1. Stop the server.

2. Back up `plugins/ExcellentEconomy`.

3. Back up the economy database.

4. Download the newest compatible ExcellentEconomy version.

5. Download the required NightCore version.

6. Replace the old plugin files.

7. Start the server.

8. Check the console for warnings.

9. Test balances, payments, Vault, and other economy plugins.

ExcellentEconomy was previously named CoinsEngine. Servers upgrading from CoinsEngine should follow the official migration instructions instead of simply replacing the plugin file.