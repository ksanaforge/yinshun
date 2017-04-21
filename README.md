==install modules under ksana2016/p/node_modules ==
    cd 2016/p
    npmi.cmd

    cd yinshun/buildscript
    ksana-bundle.cmd
    react-bundle.cmd
    codemirror-bundle.cmd
    cd ..

===start development===
    npm start

===generate release bundle.js===
    npm run build

===debugging ksana core===
    cd 2016/p
	npmi-dev.cmd
    cd yinshun/buildscript
    ksana-bundle-debug.cmd