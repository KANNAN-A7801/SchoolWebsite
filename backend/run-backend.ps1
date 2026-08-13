$portConn = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
if ($portConn) {
    Stop-Process -Id $portConn.OwningProcess -Force
    Start-Sleep -Seconds 2
}
$libJars = (Get-ChildItem -Path "BOOT-INF/lib/*.jar").FullName -join ";"
$cp = "target/classes;" + $libJars
java.exe -cp $cp com.school.lms.LmsApplication
