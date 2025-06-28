OM


https://github.com/microsoft/playwright-mcp
https://code.visualstudio.com/insider/mcp

#Prerequisite
1. Windows 10 or later
2. Node.js above v20 or latest  https://nodejs.org/en 
    $ node -v       v22.16.0
    $ npm -v        11.4.2
    $ npx -v        11.4.2
3. Visual Studio Code Insider   https://code.visualstudio.com/insiders/
4. A GitHub account (to sign in for Copilot features)
5. Gitbash : Incase dont want to use VSCode Terminal 


#Installation Steps
1. Install Node JS (Above v20) 
2. Required IDE 
   VS Code Insider  https://code.visualstudio.com/insiders/
   Cursor 
   Windsurf
   Claude Desktop 
   Qodo Gen       
3. Create a Project Folder
4. Install Playwright
    npm init playwright@latest
5. Install few extensions from VSCode Insider Marketplace
        Playwright Test for VSCode      -- by MS
        GitHub Copilot Chat             --by CoPilot

6. Sign in into Copilot Chat using Github credentials

7. Enable Playwright MCP in VS Code Insider (use Git Bash)
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'

/Documents/xxx/Repo2/PlayWrightMCP
$ code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
Added MCP servers: playwright

Note: This enables GitHub Copilot to understand how to invoke Playwright-specific code completions and codegen features.

8. Now, Go to View > Command Palette  (Ctrl+Shift+P)
Type:
    Preferences: Open User Settings (JSON)          - All project can use MCP Server
    Preferences: Open Workspace Settings (JSON)     - Only current project will use MCP Server (My Preference)

Paste:
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}

Note: 
This ensures that VS Code Insider IDE uses the correct MCP configuration behind the scenes.
settings.json :  Project Root > .vscode > settings.json 

9. We are done
You do NOT need to manually start a server. 
Once the MCP is registered and mcpServers is configured as above VS Code Insider handles everything
Copilot will invoke MCP automatically when you start writing Playwright prompts in comments or ask in the chat.






#How to Run
npx playwright test --headed A1_Basics.spec.js