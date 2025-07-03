OM

#Playwright MCP Server


#Prerequisite
1. Windows 10 or later
2. Node.js above v20 or latest  https://nodejs.org/en 
    $ node -v       v22.16.0
    $ npm -v        11.4.2
    $ npx -v        11.4.2
3. Visual Studio Code Insider   https://code.visualstudio.com/insiders/
    Other IDEs: 
      Claude Desktop 
      Cursor IDE
      Windsurf
      Qodo Gen
4. A GitHub account (to sign in for Copilot features)
5. Gitbash : Incase dont want to use VSCode Terminal 


#Installation Steps
1. Install Node JS (Above v20) 
2. Open VS Code Insider
3. Create a Project Folder
4. Install Playwright
        npm init playwright@latest
        npx playwright --version         1.53.2
5. Install few extensions from VSCode Insider Marketplace
        Playwright Test for VSCode      -- by MS
        GitHub Copilot Chat             --by CoPilot
6. Sign in into Copilot Chat using Github credentials
7. Enable Playwright MCP in VS Code Insider (use Git Bash)
Powershell: 
code-insiders --add-mcp '{\"name\":\"playwright\",\"command\":\"npx\",\"args\":[\"@playwright/mcp@latest\"]}'

Gitbash 
code-insiders --add-mcp "{\"name\":\"playwright\",\"command\":\"npx\",\"args\":[\"@playwright/mcp@latest\"]}"

Note: This enables GitHub Copilot to understand how to invoke Playwright-specific code completions and codegen features.

VS Code (Stable Release)
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'
Note: "VSCode Insider" is a Alpha Release of VSCode IDE


8. Now, Go to View > Command Palette  (Ctrl+Shift+P)
Type:
    Preferences: Open User Settings (JSON)          - All project can use MCP Server
    Preferences: Open Workspace Settings (JSON)     - Only current project will use MCP Server (Preferred)
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
https://github.com/microsoft/playwright-mcp
This ensures that VS Code Insider IDE uses the correct MCP configuration behind the scenes.
settings.json :  Project Root > .vscode > settings.json 


#How to Run
npx playwright test --headed abc.spec.js


#How to Generate Code via Playwright MCP
1. View > Command Palette > MCP: List Server 
2. Select playwright  > Show Configuration > Start Server   (Used by MCP server n other Plugins to start server: mcp.json)
3. Go to Copilot Chat
4. Select Agent in dropdown 
    Ask:    To ask copilot
    Edit:   Can edit the code files
    Agent:  Show MCP tools
5. Write User Prompts inside Copilot section
6. Enjoy    


#References:
https://github.com/microsoft/playwright-mcp
https://code.visualstudio.com/insider/mcp



E.g.
Prompt 1:
Can you pls navigate to https://practice.expandtesting.com/ and verify title of the page
Then pls click on Radio Buttons Link
Verify h1 text in newly opned page
Verify that Blue and Tennis Radio Buttons are pre selected
Now Select Red Radio button and verify its selected
Now Select Football Radio button and verify its selected


Prompt 2:
Can you pls navigate to https://practice.expandtesting.com/ and verify title of the page
Then pls click on Test Login Page Link 
Enter user credentials as practice & SuperSecretPassword!
Login and verify the generate output success message


