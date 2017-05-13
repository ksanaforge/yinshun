must install under ksana2016

==install modules under ksana2016/p/node_modules ==
    npmi.cmd

    cd yinshun/buildscript
    ksana-bundle.cmd
    react-bundle.cmd
    codemirror-bundle.cmd

==start development==
    npm start

==generate release bundle.js==
    npm run build

==debugging ksana core==
	npmi-dev.cmd
    cd yinshun/buildscript
    ksana-bundle-debug.cmd