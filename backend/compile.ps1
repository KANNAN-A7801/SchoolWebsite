$libJars = (Get-ChildItem -Path "BOOT-INF/lib/*.jar").FullName -join ";"
$lombokJar = (Get-ChildItem -Path "BOOT-INF/lib/lombok*.jar").FullName
$cp = "target/classes;" + $libJars
& "C:\Program Files\Eclipse Adoptium\jdk-17.0.14.7-hotspot\bin\javac.exe" -cp $cp -processorpath $cp -d target/classes src/main/java/com/school/lms/service/AdminService.java
Write-Host "Javac ExitCode: $LASTEXITCODE"
