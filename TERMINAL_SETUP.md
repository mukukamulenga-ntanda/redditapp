# Terminal Copy/Paste Setup for Cursor & VS Code

## ✅ Configuration Complete

The terminal copy/paste functionality has been configured. Follow these steps to enable it:

## 🔄 Step 1: Reload Cursor/VS Code

**Press one of these key combinations:**

- **Option 1:** `Ctrl + Shift + P` → Type "Reload Window" → Press Enter
- **Option 2:** Close and reopen Cursor/VS Code
- **Option 3:** Close all terminal instances and open a new one

## 📋 How to Copy & Paste (After Reload)

### **Copying from Terminal:**

1. **Select text** with your mouse (click and drag)
2. Copy using **any** of these methods:
   - **Automatic**: Text is copied when selected (enabled by default)
   - **Keyboard**: `Ctrl + C` (when text is selected)
   - **Keyboard**: `Ctrl + Shift + C` (alternative)
   - **Mouse**: Right-click on selected text

### **Pasting into Terminal:**

1. Paste using **any** of these methods:
   - **Keyboard**: `Ctrl + V`
   - **Keyboard**: `Ctrl + Shift + V` (alternative)
   - **Mouse**: Right-click in empty area of terminal

## 🎯 Quick Test

After reloading, test the functionality:

1. **Select this text** in the terminal:
   ```
   echo "Copy paste works!"
   ```

2. **Copy it** (should copy automatically when selected)

3. **Paste it** back (Ctrl + V or right-click)

## ⚙️ What Was Configured

The following settings are now active in `.vscode/settings.json`:

✅ **Copy on Selection** - Automatically copies when you select text  
✅ **Right-Click Copy/Paste** - Right-click to copy/paste  
✅ **Keyboard Shortcuts** - Ctrl+C and Ctrl+V work in terminal  
✅ **Multi-line Paste** - No warnings for pasting multiple lines  

## 🔧 Troubleshooting

### If copy/paste still doesn't work after reload:

**Option 1: Try PowerShell (recommended)**
```
In terminal, click the "+" dropdown → Select "PowerShell"
```

**Option 2: Try Command Prompt**
```
In terminal, click the "+" dropdown → Select "Command Prompt"
```

**Option 3: Check Cursor Settings**
1. Press `Ctrl + ,` to open Settings
2. Search for "terminal copy"
3. Verify these are checked:
   - ✅ Terminal > Integrated: Copy On Selection
   - ✅ Terminal > Integrated: Right Click Behavior = "copyPaste"

**Option 4: Restart Cursor Completely**
```
Close all windows → Reopen Cursor
```

## 📌 Alternative: Global Settings

If workspace settings don't work, add to **User Settings**:

1. Press `Ctrl + Shift + P`
2. Type "Preferences: Open User Settings (JSON)"
3. Add these lines:
```json
{
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.rightClickBehavior": "copyPaste"
}
```

## ✨ Keyboard Shortcuts Summary

| Action | Primary | Alternative |
|--------|---------|-------------|
| Copy | `Ctrl + C` (with text selected) | `Ctrl + Shift + C` |
| Paste | `Ctrl + V` | `Ctrl + Shift + V` |
| Interrupt | `Ctrl + C` (no text selected) | - |

## 💡 Pro Tips

1. **Auto-copy**: Just select text - it copies automatically!
2. **Right-click**: Right-click selected text to copy, right-click empty area to paste
3. **Interrupt**: `Ctrl + C` without selection still interrupts running commands
4. **Multi-line**: Paste multiple lines without warnings

## ✅ Verification

After reloading, you should be able to:
- ✅ Select text and it copies automatically
- ✅ Use `Ctrl + V` to paste
- ✅ Right-click to copy/paste
- ✅ Use standard terminal shortcuts

---

**Still having issues?** The terminal should now support copy/paste after you reload Cursor. If not, try creating a new terminal instance.

