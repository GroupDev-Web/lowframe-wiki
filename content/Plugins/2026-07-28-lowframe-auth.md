---
title: LowFrame Auth
draft: false
---
# LowFrame Auth

LowFrame Auth is an account authentication and username-protection plugin developed by **LowFrameMC**.

It allows players to protect their usernames by registering a six-digit password. After registration, the player must log in whenever they join using that username.

# Player Guide

## Registering Your Account

When joining for the first time, register your username using:

`/register <password> <confirm-password>`

Example:

`/register 482917 482917`

Your password must:

- Contain exactly six digits

- Use numbers only

- Match the confirmation password

- Be different from your Microsoft account password

LowFrame Auth may display the following reminder:

`Please register with /register <password> <confirm password>`

`Please do not use your Microsoft account password. This password will only be used for claiming your account so nobody can join under your name.`

After registration, your username becomes claimed.

## Logging In

When returning to the server, log in using:

`/login <password>`

Example:

`/login 482917`

LowFrame Auth may display the following reminder:

`Please login with /login <password>`

You must enter the password that was used when the account was registered.

## Claimed Accounts

After a username has been registered, another player cannot join and use it without the correct password.

A player attempting to use a claimed username may receive:

`This account has already been claimed!`

When you see this message and the account does not belong to you, join using a different username.

## Choosing a Password

Use a six-digit password that is difficult for other players to guess.

Avoid passwords such as:

- `000000`

- `111111`

- `123456`

- Your birth year

- Repeated numbers

- Numbers displayed in your username

Do not share your LowFrame Auth password with other players.

Do not use your Microsoft, email, Discord, or other important account passwords.

# Commands

## Register

`/register <password> <confirm-password>`

Registers and claims your username.

Example:

`/register 482917 482917`

The password and confirmation must match.

## Login

`/login <password>`

Logs you into a previously registered account.

Example:

`/login 482917`

# Account Security

LowFrame Auth protects a username after it has been registered.

To keep your account secure:

1. Do not tell anyone your password.

2. Do not enter your Microsoft account password.

3. Do not use an easily guessed number.

4. Do not post your password in chat.

5. Make sure you are using the correct username before registering.

6. Contact server staff when you believe someone has accessed your account.

LowFrame staff members should never ask for your password.

# Common Problems

## The Passwords Do Not Match

Both passwords in the registration command must be identical.

Incorrect:

`/register 482917 482918`

Correct:

`/register 482917 482917`

## The Password Is Not Six Digits

Your password must contain exactly six numbers.

Incorrect examples:

`12345`

`1234567`

`abcdef`

Correct example:

`482917`

## The Account Is Already Registered

The username has already been claimed.

Try logging in using:

`/login <password>`

When the account does not belong to you, reconnect using a different username.

## Incorrect Password

Make sure you entered the same six-digit password that was used during registration.

Passwords must be entered exactly.

## Registration Command Does Not Work

Check that:

- Both passwords were included

- Both passwords match

- The password contains exactly six digits

- The username has not already been claimed

- The command was entered without extra spaces

Correct format:

`/register <password> <confirm-password>`

## Login Command Does Not Work

Check that:

- The account has already been registered

- The correct six-digit password was entered

- The command was entered correctly

Correct format:

`/login <password>`

## Forgotten Password

Contact the staff members of the server where LowFrame Auth is installed.

Do not repeatedly guess passwords, because the server may disconnect you or temporarily prevent additional login attempts.

# Server Setup

LowFrame Auth is available as a downloadable Paper plugin.

## Requirements

LowFrame Auth requires:

- A compatible Paper server

- Access to the server's `plugins` folder

- A supported Java version

Players do not need to install anything.

## Installation

1. Stop the Minecraft server.

2. Download LowFrame Auth.

3. Upload the plugin file to:

`plugins`

4. Start the server.

5. Check the startup console for errors.

6. Run:

`/plugins`

7. Confirm that LowFrame Auth appears in green.

8. Join using a test account.

9. Test `/register`.

10. Leave and rejoin.

11. Test `/login`.

Download:

[LowFrame Auth 1.4.1]([https://github.com/GroupDev-Web/lowframe-wiki/raw/refs/heads/v5/downloads/LowFrameAuth-1.4.1.jar](https://github.com/GroupDev-Web/lowframe-wiki/raw/refs/heads/v5/downloads/LowFrameAuth-1.4.1.jar))

## Updating LowFrame Auth

1. Stop the server.

2. Back up the LowFrame Auth plugin folder.

3. Remove the previous LowFrame Auth `.jar`.

4. Upload the updated `.jar`.

5. Start the server.

6. Check the startup console.

7. Confirm that previously registered accounts still work.

8. Test registration and login with a test account.

Do not delete account data unless you intend to reset every registered username.

Use a full server restart after updating the plugin.