cinst rakudostar
$env:Path = "C:\rakudo\bin;C:\rakudo\share\perl6\site\bin;$env:Path"
refreshenv
git clone https://github.com/ugexe/zef.git
cd zef
perl6 -I. bin/zef install .
cd ..
Remove-Item -Recurse -Force zef
zef update
