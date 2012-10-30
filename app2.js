var watch = require("./node_modules/watch/main");
watch.createMonitor('./styl', function (monitor) {
    // monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.
    // console.log(monitor.files);
    monitor.on("created", function (f, stat) {
      // Handle file changes
      console.log("created",f,stat);
    })
    monitor.on("changed", function (f, curr, prev) {
      // Handle new files
       console.log("changed",f);
    })
    monitor.on("removed", function (f, stat) {
      // Handle removed files
       console.log("removed",f);
    })
  }  
)