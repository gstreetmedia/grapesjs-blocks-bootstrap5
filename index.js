import BootstrapBlocks from "./BootstrapBlocks";

(function(){
    if (BootstrapBlocks.check()) {
        BootstrapBlocks.init(window.grapesjs);
    }
}());
