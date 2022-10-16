import discord
from discord.ext import commands

TOKEN = "MTAzMTE2Mjg2ODMwMjg3MjU3OA.G5fCLz.u3i377gi4nGIOHLFBWG3sRaSx3Kz9uwlIg5v8o"
PREFIX = "!"

client = discord.Client(intents=discord.Intents.default())

#bot = commands.Bot(command_prefix = PREFIX)
client.run(TOKEN)