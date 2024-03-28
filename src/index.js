import BootstrapBlocks from "./BootstrapBlocks";

(function(){
    window.addEventListener(
        "load",
        function() {
            if (BootstrapBlocks.check()) {
                BootstrapBlocks.init(window.grapesjs);
            }
        }
    )

}());
