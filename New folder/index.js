onload = function() {

    // Setup
    var languageOption = document.getElementById("language");
    var themeOption = document.getElementById("theme");
    var codeEditor = document.getElementById("editor");
    var theme = "monokai";

    // Ace Setup
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");

    // Change content dynamically
    languageOption.onchange = function() {
        switch(this.value) {
            case 'html':     changeContent('&lt!--\n\tHi There!\n\tThis is Tolu CodePlayground\n\t made with the Ace library\n\tused in this code!\n-->\n\n&lt;!DOCTYPE html>\n&lt;html lang="en">\n\t&lt;head>\n\t\t&lt;meta charset="UTF-8">\n\t&lt;/head>\n\t&lt;body>\n\t&lt;/body>\n&lt;/html>', "html"); break;
            case 'js':         changeContent("// Just an arrow function... \n\nvar> console.log();\n\nwaifu('Rem');", "javascript"); break;
            case 'css':     changeContent("/* Oh, let's write some CSS! */\n\nbody {\n\tmargin: 0;\n}\n\n.super_div {\n\tdisplay: inline-block;\n}", "css"); break;
            case 'python':     changeContent("'''\nAlways wanted to learn something\nmore about Python,\nso simple and at the\nsame time so complex!\n'''\n\nprint('Have a nice day!')", "python"); break;
            case 'php':     changeContent("&lt;?php\n\n// PHP and WordPress, nothing else! \n\nif( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ):\n\t wp_nonce_field( 'prefix_function', 'prefix_function_nonce' );\nendif;'", "php"); break;
            case 'ruby':     changeContent("# Ruby, just Ruby!\n\nclass HelloTrema < Trema::Controller\n\tdef start(_args)\n\t\tlogger.info 'Trema started.'\n\tend\n\tdef switch_ready(datapath_id)\n\t\tlogger.info \"Hello #{datapath_id.to_hex}!\"\n\tend\nend", "ruby"); break;
            case 'java':     changeContent("// Do you want some coffee?\n\npublic class HelloWorld\n{\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println('Hello World!');\n\t}\n}", "java"); break;
            default:         changeContent("&lt!-- Made by Maz -->", "html"); break;
        }
    }

    // Change theme dynamically
    themeOption.onchange = function() {
        switch(this.value) {
            case 'monokai':         changeTheme("monokai");                break;
            case 'dawn':             changeTheme("dawn");                 break;
            case 'github':             changeTheme("github");                 break;
            case 'plastic':         changeTheme("iplastic");             break;
            case 'solarizedlight':     changeTheme("solarized_light");     break;
            case 'sql_server':         changeTheme("sqlserver");             break;
            case 'ambiance':         changeTheme("ambiance");             break;
            case 'chaos':             changeTheme("chaos");                 break;
            case 'gruvbox':         changeTheme("gruvbox");             break;
            case 'solarized_dark':     changeTheme("solarized_dark");         break;
            case 'terminal':         changeTheme("terminal");             break;
            default:                 changeTheme("monokai");                break;
        }
    }

    // Functions
    function changeContent(content, lang) {
        var elementExists = document.getElementById("editor");
        if( elementExists ) document.body.removeChild(elementExists);
        var div = document.createElement("div");
        div.innerHTML = content;
        div.id = "editor";
        document.body.appendChild(div);
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/" + theme);
        editor.getSession().setMode("ace/mode/" + lang);
    }

    function changeTheme(type) {
        theme = type;
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/" + theme);
    }

}