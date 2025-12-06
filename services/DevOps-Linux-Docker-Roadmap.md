# Complete Roadmap: Linux Fundamentals → Docker → DevOps Mastery

## Executive Summary

This comprehensive roadmap guides you from beginner Linux skills to becoming a proficient DevOps engineer capable of building, deploying, and managing containerized applications. The entire journey typically requires **6-12 months of consistent effort**, with job-ready proficiency achievable in **3 months** of intensive daily practice.

---

## PART 1: LINUX FUNDAMENTALS (Weeks 1-8)

### Phase 1.1: Introduction to Linux and Core Concepts (Weeks 1-2)

#### What You'll Learn:
- Linux architecture and how it differs from Windows
- Popular Linux distributions (Ubuntu, CentOS, RHEL, Debian)
- Terminal/Shell basics
- The Linux filesystem hierarchy structure

#### Detailed Topics:

**1. Linux Architecture Basics**
- Kernel and its role
- Shell and utilities
- System calls and libraries
- User space vs Kernel space

**2. Why Linux Over Windows for DevOps?**
- **Cost Efficiency**: Linux is free; Windows requires licensing fees at scale
- **Lightweight & Performance**: Linux containers are smaller (no UI overhead), perfect for microservices
- **Automation-Friendly**: Designed for scripting and automation (bash, Python)
- **Server Stability**: Better uptime, lower crash rates
- **Community Support**: Massive open-source ecosystem with continuous improvements
- **Native Container Support**: Docker and Kubernetes are built with Linux in mind
- **Security**: Multi-layered, open-source review, better isolation
- **Scalability**: Easy to customize and strip down to essentials
- **DevOps Tools**: Jenkins, Kubernetes, Ansible, Prometheus are Linux-first
- **No GUI Overhead**: Runs headless, consuming minimal resources
- **Portability**: Works everywhere—cloud, on-premise, embedded systems

**3. Getting Started**
- Install Ubuntu 20.04 or later (either native or VM using VirtualBox/VMware)
- Understand the terminal interface
- Basic command structure: `command [options] arguments`

#### Key Commands to Practice:
```bash
# System Information
uname -a              # System information
whoami                # Current user
date                  # Current date/time
uptime                # System uptime and load average
```

#### Hands-On Exercise:
- Set up Ubuntu in a virtual machine
- Practice opening terminal and executing basic commands
- Explore the file system using GUI and terminal

---

### Phase 1.2: Navigation and File System Management (Weeks 2-3)

#### Essential Navigation Commands:
```bash
pwd                   # Print working directory
ls                    # List directory contents
ls -la                # List with hidden files and permissions
ls -lh                # List with human-readable sizes
cd /path/to/dir       # Change directory
cd ~                  # Go to home directory
cd ..                 # Go to parent directory
cd -                  # Go to previous directory
tree                  # View directory structure as tree
find /path -name "pattern"  # Search for files
locate filename       # Quick file search (uses database)
```

#### File and Directory Operations:
```bash
mkdir directory_name              # Create directory
mkdir -p /path/to/nested/dir      # Create nested directories
touch filename.txt                # Create empty file
cp source.txt destination.txt     # Copy file
cp -r source_dir dest_dir         # Copy directory recursively
mv oldname.txt newname.txt        # Move/Rename file
mv file.txt /path/to/location     # Move file to different location
rm filename.txt                   # Delete file (permanent!)
rm -r directory_name              # Delete directory and contents
rm -i filename.txt                # Delete with confirmation
rmdir empty_directory             # Remove empty directory
cat filename.txt                  # Display file contents
more filename.txt                 # Page through file
less filename.txt                 # Better pager (use arrow keys)
head -n 20 filename.txt           # Show first 20 lines
tail -n 20 filename.txt           # Show last 20 lines
wc -l filename.txt                # Count lines in file
```

#### Understanding File Paths:
- **Absolute Path**: Starts with `/` (e.g., `/home/user/documents/file.txt`)
- **Relative Path**: Relative to current directory (e.g., `documents/file.txt`)
- **Home Directory Shortcut**: `~` expands to user's home

#### Hands-On Exercises:
1. Create a project directory structure: `~/projects/linux-practice/`
2. Create multiple files and organize them in subdirectories
3. Practice moving, copying, and deleting files
4. Use `find` to locate specific files by extension
5. Use `tree` to visualize complex directory structures

---

### Phase 1.3: File Content and Text Processing (Weeks 3-4)

#### Viewing and Editing Files:
```bash
# Text editors
nano filename.txt            # Simple editor (beginner-friendly)
vi filename.txt              # Advanced editor (powerful but steep learning curve)
vim filename.txt             # Improved vi with syntax highlighting

# Viewing content
cat file1.txt file2.txt      # Concatenate and display files
less large_file.txt          # Scroll through large files
grep "pattern" filename.txt  # Search for pattern in file
grep -i "Pattern" file.txt   # Case-insensitive search
grep -n "pattern" file.txt   # Show line numbers
grep -c "pattern" file.txt   # Count matches
grep -r "pattern" /path/     # Search recursively in directory
```

#### Advanced Text Processing:
```bash
# Word/character/line counting
wc filename.txt              # Line, word, byte count
wc -c filename.txt           # Byte count only
wc -w filename.txt           # Word count only

# Sorting and unique values
sort filename.txt            # Sort lines alphabetically
sort -n filename.txt         # Sort numerically
sort -r filename.txt         # Reverse sort
uniq filename.txt            # Remove duplicate consecutive lines
uniq -c filename.txt         # Count occurrences

# Text transformation
sed 's/old/new/' file.txt    # Substitute first occurrence per line
sed 's/old/new/g' file.txt   # Substitute all occurrences
sed 's/old/new/gi' file.txt  # Case-insensitive substitution
awk '{print $1, $3}' file.txt # Extract columns from text

# Comparing files
diff file1.txt file2.txt     # Show differences between files
comm file1.txt file2.txt     # Compare sorted files
```

#### Piping and Redirection:
```bash
# Output redirection
command > file.txt           # Redirect output to file (overwrite)
command >> file.txt          # Append output to file
command 2> error.log         # Redirect errors to file
command > out.log 2>&1       # Redirect both output and errors

# Piping (chain commands)
cat large_file.txt | grep "pattern" | wc -l
# Read file → search for pattern → count results
```

#### Hands-On Exercises:
1. Create a text file with 50+ lines of data
2. Use `grep` to search for specific patterns
3. Sort data, find unique values, and count occurrences
4. Use pipes to combine multiple commands
5. Learn the basics of `sed` and `awk` for text transformation

---

### Phase 1.4: User and Permission Management (Weeks 4-5)

#### Understanding Linux Permissions:
```bash
# Viewing permissions
ls -l filename.txt
# Output: -rw-r--r-- 1 user group 1234 Jan 15 10:30 filename.txt
#         ^--------   ^   ^     ^
#         permissions user group

# Permission breakdown: -rwxrwxrwx
# First character: - (file), d (directory), l (symlink)
# Next 3 (owner): rwx = read, write, execute
# Next 3 (group): rwx = same for group
# Last 3 (others): rwx = same for others
```

#### Changing Permissions:
```bash
# Symbolic method
chmod u+x filename.txt       # Add execute for user
chmod g+r filename.txt       # Add read for group
chmod o-w filename.txt       # Remove write for others
chmod a+x filename.txt       # Add execute for all
chmod u=rwx,g=rx,o= filename.txt  # Set specific permissions

# Octal method (common in DevOps)
chmod 755 filename.txt       # rwxr-xr-x (executable script)
chmod 644 filename.txt       # rw-r--r-- (readable file)
chmod 700 directory/         # rwx------ (private directory)
chmod 777 filename.txt       # rwxrwxrwx (AVOID - security risk!)

# Octal breakdown:
# 7 = 4(read) + 2(write) + 1(execute)
# 5 = 4(read) + 1(execute)
# 4 = 4(read)
# 0 = none
```

#### User and Group Management:
```bash
# User operations
sudo useradd username          # Create new user
sudo useradd -m username       # Create user with home directory
sudo useradd -s /bin/bash username  # Specify shell
sudo userdel username          # Delete user
sudo userdel -r username       # Delete user and home directory
sudo passwd username           # Set/change password
sudo usermod -aG groupname username  # Add user to group

# Group operations
sudo groupadd groupname        # Create new group
sudo groupdel groupname        # Delete group
groups username                # Show groups for user
id username                    # Show user ID and groups

# Changing ownership
sudo chown user filename       # Change owner
sudo chown user:group filename # Change owner and group
sudo chown -R user:group /path/dir/  # Change recursively
```

#### Sudoers File:
```bash
sudo visudo                    # Edit sudoers file safely
# Example entry: user ALL=(ALL) ALL
# Allows user to run all commands with sudo
```

#### Hands-On Exercises:
1. Create multiple users and groups
2. Create files with different permission levels
3. Practice octal notation permissions (755, 644, 700, etc.)
4. Add users to groups and verify group membership
5. Create a script file and make it executable

---

### Phase 1.5: System Administration Basics (Weeks 5-6)

#### Package Management:
```bash
# For Debian/Ubuntu systems
sudo apt update               # Update package list
sudo apt upgrade              # Upgrade all packages
sudo apt install package_name # Install package
sudo apt remove package_name  # Remove package
sudo apt autoremove           # Remove unused packages
apt search keyword            # Search for packages
apt show package_name         # Show package details

# For RHEL/CentOS systems
sudo yum update               # Update packages
sudo yum install package_name # Install package
sudo yum remove package_name  # Remove package
yum search keyword            # Search packages
```

#### Managing Services and Processes:
```bash
# Viewing processes
ps                            # Show current user's processes
ps aux                        # Show all processes
ps aux | grep process_name    # Find specific process
top                           # Interactive process monitor
htop                          # Better process monitor (if installed)
pgrep process_name            # Get PID of process

# Managing systemd services
sudo systemctl start service_name    # Start service
sudo systemctl stop service_name     # Stop service
sudo systemctl restart service_name  # Restart service
sudo systemctl enable service_name   # Enable at boot
sudo systemctl disable service_name  # Disable at boot
sudo systemctl status service_name   # Check service status
systemctl list-unit-files            # List all services

# Killing processes
kill PID                      # Gracefully terminate process
kill -9 PID                   # Force kill process
killall process_name          # Kill all processes with name
```

#### System Monitoring:
```bash
# Disk usage
df                            # Disk space usage
df -h                         # Human-readable format
du -sh /path/to/dir           # Directory size
du -sh /path/to/dir/*         # Size of each subdirectory

# Memory and CPU
free                          # Memory usage
free -h                       # Human-readable format
top                           # Real-time system monitoring
vmstat 1 5                     # Virtual memory stats (5 samples, 1 sec apart)

# Network
ifconfig                      # Network interface info
ip addr                       # Modern alternative to ifconfig
netstat -tulnp                # Active network connections
ss -tulnp                     # Modern alternative to netstat
ping google.com               # Test connectivity
traceroute google.com         # Trace route to host
```

#### System Logs:
```bash
# Viewing logs
tail -f /var/log/syslog       # Monitor system log in real-time
tail -f /var/log/auth.log     # Monitor authentication log
journalctl -xe                # View systemd journal
journalctl -f                 # Follow journal in real-time
dmesg                         # View kernel messages
```

#### Hands-On Exercises:
1. Install and remove multiple packages
2. Start, stop, and check status of services (e.g., apache2, nginx)
3. Monitor running processes and system resources
4. Practice killing processes gracefully and forcefully
5. Check disk space and identify large files/directories
6. Monitor system logs and understand common log messages

---

### Phase 1.6: Disk Management and LVM (Weeks 6-7)

#### Disk Partitioning Basics:
```bash
# View disk and partition info
lsblk                         # List block devices
fdisk -l                      # List all partitions
parted -l                     # Another partition view tool
df -h                         # Mounted partition space usage

# Create new partition (example with /dev/sdb)
sudo fdisk /dev/sdb
# Command options: n (new), d (delete), w (write), q (quit)
# Format partition: sudo mkfs.ext4 /dev/sdb1

# Mount/Unmount
sudo mount /dev/sdb1 /mnt/data        # Mount partition
sudo umount /mnt/data                 # Unmount partition
# Make permanent in /etc/fstab
```

#### Logical Volume Management (LVM) - Advanced:
```bash
# LVM provides flexible storage management
# Structure: Physical Volume (PV) → Volume Group (VG) → Logical Volume (LV)

# Step 1: Create Physical Volume
sudo pvcreate /dev/sdb        # Initialize disk for LVM
sudo pvdisplay                # View physical volumes

# Step 2: Create Volume Group
sudo vgcreate vg_data /dev/sdb     # Create VG from PV
sudo vgdisplay                      # View volume groups

# Step 3: Create Logical Volume
sudo lvcreate -n lv_backups -L 50G vg_data  # 50GB LV
sudo lvdisplay                              # View logical volumes

# Step 4: Format and Mount
sudo mkfs.ext4 /dev/vg_data/lv_backups
sudo mount /dev/vg_data/lv_backups /backups

# Extending LVM (advantage of LVM)
sudo lvextend -L +20G /dev/vg_data/lv_backups  # Add 20GB
sudo resize2fs /dev/vg_data/lv_backups         # Resize filesystem
```

#### Hands-On Exercises:
1. View current disk and partition layout
2. (In VM) Create a new virtual disk
3. Partition and format the new disk
4. Mount the partition and verify
5. Practice LVM: create PV, VG, and LV
6. Extend an LV and resize the filesystem

---

### Phase 1.7: Network Fundamentals (Weeks 7-8)

#### TCP/IP Basics:

**TCP/IP Model (4 Layers):**
1. **Application Layer**: HTTP, HTTPS, SSH, FTP, DNS
2. **Transport Layer**: TCP (reliable), UDP (fast)
3. **Internet Layer**: IP, ICMP
4. **Network Access Layer**: Ethernet, Wi-Fi

#### Network Interfaces and Configuration:
```bash
# View network interfaces
ifconfig                      # Traditional method
ip addr                       # Modern method
ip route                      # View routing table

# View DNS settings
cat /etc/resolv.conf          # DNS servers
cat /etc/hosts                # Local hostname mappings

# Network configuration (temporary)
sudo ip addr add 192.168.1.100/24 dev eth0
sudo ip addr del 192.168.1.100/24 dev eth0

# Permanent configuration (Ubuntu)
# Edit /etc/netplan/00-installer-config.yaml
# OR /etc/network/interfaces (older systems)
```

#### Important Network Concepts:

**IP Addresses:**
- **IPv4**: 32-bit (e.g., 192.168.1.100)
- **IPv6**: 128-bit (e.g., 2001:0db8::1)
- **CIDR Notation**: `192.168.1.0/24` means `/24` = 256 addresses

**Ports:**
- **Well-known Ports** (0-1023): SSH (22), HTTP (80), HTTPS (443), DNS (53)
- **Registered Ports** (1024-49151): Custom applications
- **Dynamic Ports** (49152-65535): Temporary connections

**TCP vs UDP:**
- **TCP**: Reliable, ordered, connection-based (HTTP, SSH, FTP)
- **UDP**: Fast, connectionless, no reliability (DNS, video streaming)

#### Networking Commands:
```bash
# Connectivity testing
ping google.com                # Test reachability
traceroute google.com          # Trace route to host
mtr google.com                 # Real-time traceroute
dig google.com                 # DNS lookup
nslookup google.com            # DNS query

# Port and connection info
netstat -tulnp                 # Show all listening ports and connections
ss -tulnp                      # Modern alternative
lsof -i :8080                  # List processes on port 8080
telnet example.com 80          # Test connectivity to port

# Network configuration
hostname                       # Show hostname
sudo hostnamectl set-hostname newhostname  # Change hostname
iwconfig                       # Wireless interface info (older)
nmcli                          # NetworkManager command-line

# Firewall (ufw on Ubuntu)
sudo ufw status                # Check firewall status
sudo ufw enable                # Enable firewall
sudo ufw allow 22/tcp          # Allow SSH
sudo ufw allow 80/tcp          # Allow HTTP
sudo ufw deny 22/tcp           # Deny SSH
```

#### Hands-On Exercises:
1. Identify your network interfaces and IP addresses
2. Ping various hosts and test connectivity
3. Perform DNS lookups (dig, nslookup)
4. View active network connections (netstat/ss)
5. Configure firewall rules (allow/deny ports)
6. Understand CIDR notation and IP ranges

---

## PART 2: ADVANCED LINUX CONCEPTS (Weeks 8-12)

### Phase 2.1: Shell Scripting Fundamentals (Weeks 8-9)

#### Introduction to Bash:
```bash
# Shebang - tells system which interpreter to use
#!/bin/bash

# Comments
# This is a comment

# Simple echo
echo "Hello, World!"
```

#### Variables and Data Types:
```bash
#!/bin/bash

# Variables (no spaces around =)
name="John"
age=30
count=100

# Using variables
echo "My name is $name"
echo "I am ${age} years old"

# Command substitution
current_date=$(date +%Y-%m-%d)
files=$(ls -1 | wc -l)

# Environment variables
echo $HOME          # Home directory
echo $USER          # Current user
echo $PWD           # Current working directory
echo $PATH          # Executable search path

# Reading user input
read -p "Enter your name: " username
echo "Hello, $username"
```

#### Arrays:
```bash
#!/bin/bash

# Array declaration
fruits=("apple" "banana" "orange")

# Access array elements
echo ${fruits[0]}       # apple
echo ${fruits[@]}       # All elements
echo ${#fruits[@]}      # Array length

# Loop through array
for fruit in "${fruits[@]}"; do
    echo $fruit
done
```

#### Conditional Statements:
```bash
#!/bin/bash

# if-else statement
if [ "$age" -gt 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi

# if-elif-else
if [ "$age" -lt 13 ]; then
    echo "Child"
elif [ "$age" -lt 20 ]; then
    echo "Teenager"
else
    echo "Adult"
fi

# Test conditions
[ "$name" = "John" ]        # String equality
[ "$age" -eq 30 ]           # Numeric equality
[ "$age" -ne 30 ]           # Not equal
[ "$age" -lt 30 ]           # Less than
[ "$age" -gt 30 ]           # Greater than
[ -f /path/to/file ]        # File exists
[ -d /path/to/dir ]         # Directory exists
[ -r /path/to/file ]        # File readable
[ -w /path/to/file ]        # File writable
[ -x /path/to/file ]        # File executable

# Logical operators
[ condition1 ] && [ condition2 ]   # AND
[ condition1 ] || [ condition2 ]   # OR
```

#### Loops:
```bash
#!/bin/bash

# For loop - range
for i in {1..5}; do
    echo "Number: $i"
done

# For loop - list
for item in apple banana cherry; do
    echo "Fruit: $item"
done

# For loop - C-style
for ((i=0; i<5; i++)); do
    echo "Index: $i"
done

# While loop
counter=0
while [ $counter -lt 5 ]; do
    echo "Counter: $counter"
    ((counter++))
done

# Until loop (opposite of while)
count=0
until [ $count -eq 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Break and continue
for i in {1..10}; do
    if [ $i -eq 3 ]; then
        continue    # Skip to next iteration
    fi
    if [ $i -eq 8 ]; then
        break       # Exit loop
    fi
    echo $i
done
```

#### Functions:
```bash
#!/bin/bash

# Function definition
greet() {
    echo "Hello, $1!"
}

# Function with multiple parameters
add() {
    local sum=$(($1 + $2))
    echo $sum
}

# Function with return value
is_even() {
    if [ $((($1 % 2))) -eq 0 ]; then
        return 0    # Success
    else
        return 1    # Failure
    fi
}

# Using functions
greet "John"
result=$(add 5 3)
echo "Sum: $result"

if is_even 4; then
    echo "4 is even"
fi
```

#### String Operations:
```bash
#!/bin/bash

name="DevOps"

# Length
echo ${#name}               # 6

# Substring
echo ${name:0:3}            # Dev (from position 0, 3 chars)
echo ${name:3}              # Ops (from position 3 to end)

# String replacement
echo ${name/DevOps/Docker}  # Docker
echo ${name/Op/Op}          # DevOps

# Check if substring exists
if [[ "$name" == *"Ops"* ]]; then
    echo "Contains Ops"
fi
```

#### Command Line Arguments:
```bash
#!/bin/bash
# Usage: script.sh arg1 arg2 arg3

echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "All arguments: $@"
echo "Number of arguments: $#"
```

#### Error Handling:
```bash
#!/bin/bash

# Exit on error
set -e

# Check if command succeeded
if ! grep "pattern" file.txt; then
    echo "Pattern not found"
    exit 1
fi

# Using trap for cleanup
cleanup() {
    echo "Cleaning up..."
    # Remove temporary files
    rm -f /tmp/tempfile
}
trap cleanup EXIT

# Create temp file
touch /tmp/tempfile
```

#### Hands-On Exercises:
1. Create a script that takes user input and performs calculations
2. Write a loop that processes multiple files
3. Create a function library and source it from another script
4. Build a menu-driven script with user choices
5. Write a script with error handling and logging
6. Create a backup script that archives directories

#### Example Project: Backup Script
```bash
#!/bin/bash
# Daily backup script

BACKUP_DIR="/backups"
SOURCE_DIR="/home/user/important_data"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/backup_$DATE.tar.gz"

# Check if source exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory not found"
    exit 1
fi

# Create backup
tar -czf "$BACKUP_FILE" "$SOURCE_DIR"

if [ $? -eq 0 ]; then
    echo "Backup created successfully: $BACKUP_FILE"
else
    echo "Backup failed"
    exit 1
fi

# Keep only last 7 backups
find "$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +7 -delete
```

---

### Phase 2.2: Cron and Task Scheduling (Week 9)

#### Cron Basics:
```bash
# View crontab
crontab -l

# Edit crontab
crontab -e

# Remove crontab
crontab -r
```

#### Cron Syntax:
```
* * * * * command_to_execute
│ │ │ │ │
│ │ │ │ └─── Day of Week (0-6, 0=Sunday)
│ │ │ └───── Month (1-12)
│ │ └─────── Day of Month (1-31)
│ └───────── Hour (0-23)
└─────────── Minute (0-59)

# Examples:
0 0 * * *     # Every day at midnight
0 2 * * 0     # Every Sunday at 2 AM
*/5 * * * *   # Every 5 minutes
0 8-17 * * *  # Every hour from 8 AM to 5 PM
0 0 1 * *     # First day of month at midnight
```

#### Practical Examples:
```bash
# Backup database daily at 3 AM
0 3 * * * /home/user/scripts/backup_db.sh

# Check disk space every 30 minutes
*/30 * * * * /usr/local/bin/check_disk_space.sh

# Monitor service every 5 minutes
*/5 * * * * /home/user/scripts/check_service_status.sh

# Cleanup logs weekly on Sunday at 4 AM
0 4 * * 0 /home/user/scripts/cleanup_logs.sh
```

#### Systemd Timers (Modern Alternative):
```bash
# Create a service file
sudo nano /etc/systemd/system/backup.service

[Unit]
Description=Daily backup service

[Service]
Type=oneshot
ExecStart=/home/user/scripts/backup.sh

# Create a timer file
sudo nano /etc/systemd/system/backup.timer

[Unit]
Description=Daily backup timer

[Timer]
OnCalendar=daily
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target

# Enable and start timer
sudo systemctl enable backup.timer
sudo systemctl start backup.timer
```

#### Hands-On Exercises:
1. Create a cron job that runs every 15 minutes
2. Schedule a backup script to run daily at 2 AM
3. Set up a log rotation cron job
4. Create a system health check script and schedule it
5. Experiment with systemd timers

---

### Phase 2.3: Advanced System Monitoring and Logging (Week 10)

#### System Monitoring in Depth:
```bash
# Real-time monitoring
top                          # CPU and memory
htop                         # Enhanced top (if installed)
iotop                        # Disk I/O monitoring
nethogs                      # Per-process network usage
atop                         # Advanced system monitoring

# Detailed metrics
cat /proc/cpuinfo            # CPU information
cat /proc/meminfo            # Memory information
cat /proc/diskstats          # Disk statistics
cat /proc/net/netstat        # Network statistics

# Load average explanation
uptime
# Load of 1.0 on single-core = 100% utilized
# Load of 2.0 on dual-core = 100% utilized
# Load of 0.5 on quad-core = 12.5% utilized
```

#### Log Management:
```bash
# System logs
sudo tail -f /var/log/syslog         # System log
sudo tail -f /var/log/auth.log       # Authentication log
sudo tail -f /var/log/kern.log       # Kernel log
sudo dmesg                            # Kernel messages buffer

# Application logs (varies by service)
sudo tail -f /var/log/apache2/error.log    # Apache
sudo tail -f /var/log/nginx/error.log      # Nginx
sudo tail -f /var/log/mysql/error.log      # MySQL

# Journal (systemd)
journalctl -xe                        # Last entries with explanation
journalctl -f                         # Follow journal
journalctl -u service_name            # Specific service
journalctl -p warning                 # By priority
journalctl --since "1 hour ago"       # Time filter

# Log rotation (logrotate)
cat /etc/logrotate.conf               # Main config
cat /etc/logrotate.d/service          # Service-specific config
```

#### Performance Troubleshooting:
```bash
# Find CPU hogs
ps aux --sort=-%cpu | head -5

# Find memory hogs
ps aux --sort=-%mem | head -5

# Find processes by user
ps aux | grep username

# Network troubleshooting
iftop                                 # Network traffic
nethogs                               # Per-process network
tcpdump -i eth0 -A                    # Capture and print packets
ss -s                                 # Socket statistics
```

#### Hands-On Exercises:
1. Monitor system metrics during a load test
2. Analyze logs to troubleshoot a service issue
3. Set up log rotation for custom applications
4. Create performance baseline metrics
5. Practice identifying bottlenecks in system performance

---

### Phase 2.4: Security Best Practices (Week 10)

#### SSH Security:
```bash
# SSH key generation
ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa

# SSH without password
ssh-copy-id -i ~/.ssh/id_rsa.pub user@host
ssh user@host                    # Should not ask for password

# SSH configuration
cat ~/.ssh/config

Host server1
    HostName 192.168.1.100
    User ubuntu
    IdentityFile ~/.ssh/id_rsa
    Port 22

# Hardening SSH (on server)
sudo nano /etc/ssh/sshd_config

PermitRootLogin no              # Disable root SSH
PasswordAuthentication no        # Public key only
PubkeyAuthentication yes
X11Forwarding no
MaxAuthTries 3
ClientAliveInterval 300
```

#### Firewall Configuration:
```bash
# ufw (Uncomplicated Firewall)
sudo ufw status                  # Check status
sudo ufw enable                  # Enable firewall
sudo ufw allow 22/tcp            # Allow SSH
sudo ufw allow 80/tcp            # Allow HTTP
sudo ufw allow 443/tcp           # Allow HTTPS
sudo ufw allow from 192.168.1.0/24  # Allow subnet
sudo ufw deny 23/tcp             # Deny Telnet
sudo ufw delete allow 80/tcp     # Remove rule

# iptables (lower level)
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -j DROP   # Drop all other
```

#### File Permissions Best Practices:
```bash
# Home directories
chmod 755 /home/user             # rwxr-xr-x
chmod 700 /home/user             # rwx------ (safer)

# Files
chmod 644 /home/user/file.txt    # rw-r--r--
chmod 600 /home/user/.ssh/config # rw------- (sensitive files)

# Scripts
chmod 755 /usr/local/bin/script.sh   # rwxr-xr-x
chmod 750 /opt/app/secure.sh         # rwxr-x--- (group access)

# Sensitive files
chmod 400 /etc/shadow            # r-------- (read-only)
chmod 440 /etc/sudoers           # r--r----- (readable by sudo group)
```

#### SELinux and AppArmor:
```bash
# SELinux (RHEL/CentOS)
getenforce                       # Check status
setenforce 0                     # Disable (temporary)
sudo nano /etc/selinux/config    # Persistent setting

# AppArmor (Ubuntu/Debian)
sudo aa-status                   # Check status
sudo systemctl restart apparmor  # Restart AppArmor
```

#### Hands-On Exercises:
1. Set up SSH key-based authentication
2. Configure firewall rules
3. Review and harden SSH configuration
4. Set up sudo access for specific users
5. Audit file and directory permissions
6. Practice principle of least privilege

---

## PART 3: DOCKER FUNDAMENTALS AND MASTERY (Weeks 12-16)

### Phase 3.1: Docker Basics (Weeks 12-13)

#### What is Docker?
Docker is a containerization platform that packages applications and dependencies into lightweight, portable containers. Unlike virtual machines, containers share the host OS kernel, making them more efficient.

**Key Concepts:**
- **Image**: Blueprint for a container (like a class in OOP)
- **Container**: Running instance of an image (like an object)
- **Registry**: Repository for images (Docker Hub, Private Registry)
- **Layer**: Each step in Dockerfile creates a layer (enables caching)

#### Why Docker?
1. **Consistency**: "Works on my machine" problem solved
2. **Efficiency**: Lightweight, fast startup (seconds vs minutes)
3. **Scalability**: Easy to run multiple instances
4. **Isolation**: Processes isolated from each other
5. **DevOps-Friendly**: Standard format for deployment

#### Installing Docker:
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker

# Verify installation
docker --version
docker run hello-world
```

#### Basic Docker Commands:
```bash
# Image management
docker pull ubuntu:20.04             # Download image
docker images                         # List local images
docker search nginx                   # Search for images
docker rmi image_name                # Remove image
docker tag old_name new_name         # Tag image

# Container lifecycle
docker run -d --name container_name ubuntu  # Run container
docker ps                             # Running containers
docker ps -a                          # All containers (including stopped)
docker start container_id             # Start stopped container
docker stop container_id              # Stop running container
docker restart container_id           # Restart container
docker rm container_id                # Delete container

# Executing commands
docker exec -it container_id bash    # Execute command in running container
docker logs container_id              # View container logs
docker logs -f container_id           # Follow logs in real-time
docker stats container_id             # Resource usage

# Container inspection
docker inspect container_id           # Detailed container info
docker top container_id               # Running processes
docker port container_id              # Port mappings
```

#### Running Your First Containers:
```bash
# Simple Nginx web server
docker run -d -p 8080:80 --name my-nginx nginx

# Ubuntu interactive shell
docker run -it --name my-ubuntu ubuntu bash

# MySQL database
docker run -d \
  --name my-mysql \
  -e MYSQL_ROOT_PASSWORD=password \
  -p 3306:3306 \
  mysql:8.0

# Access the container
docker exec -it my-mysql mysql -u root -p
```

#### Container Networking:
```bash
# Bridge network (default)
docker run -d --name web nginx

# Custom network
docker network create my-network
docker run -d --network my-network --name db postgres
docker run -d --network my-network --name web nginx

# Port mapping
docker run -d -p 8080:80 -p 443:443 nginx
# -p host_port:container_port

# View networks
docker network ls
docker network inspect bridge
docker network inspect my-network
```

#### Managing Data (Volumes):
```bash
# Volume types

# Anonymous volume (deleted with container)
docker run -v /data ubuntu

# Named volume (persists)
docker volume create my-volume
docker run -v my-volume:/data ubuntu

# Bind mount (mount host directory)
docker run -v /host/path:/container/path ubuntu

# Volume commands
docker volume ls
docker volume inspect my-volume
docker volume rm my-volume

# Practical example: persistent database
docker run -d \
  --name mysql \
  -e MYSQL_ROOT_PASSWORD=password \
  -v mysql-data:/var/lib/mysql \
  mysql:8.0
```

#### Hands-On Exercises:
1. Pull and run various images (nginx, ubuntu, alpine, etc.)
2. Run a container with port mapping and verify accessibility
3. Execute commands inside containers
4. Create and use volumes for data persistence
5. Create custom networks and link containers
6. Monitor container logs and resource usage
7. Stop, start, and remove containers

#### Example Project: Web Server Stack
```bash
# Create network
docker network create web-stack

# Run database
docker run -d \
  --name database \
  --network web-stack \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -v db-data:/var/lib/mysql \
  mysql:8.0

# Run web server
docker run -d \
  --name webserver \
  --network web-stack \
  -p 80:80 \
  -v /home/user/website:/usr/share/nginx/html \
  nginx

# Verify connectivity
docker exec webserver ping database
```

---

### Phase 3.2: Building Custom Images with Dockerfile (Weeks 13-14)

#### Dockerfile Fundamentals:

A Dockerfile is a text file containing instructions to build a Docker image.

```dockerfile
# Syntax: INSTRUCTION arguments

# Base image
FROM ubuntu:20.04

# Metadata
LABEL maintainer="your-email@example.com"
LABEL version="1.0"

# Environment variables
ENV APP_HOME /app
ENV NODE_ENV=production

# Update and install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Working directory
WORKDIR /app

# Copy files
COPY package.json .
COPY . .

# Run build commands
RUN npm install

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Set user (security)
USER appuser

# Entry point
ENTRYPOINT ["node"]
CMD ["server.js"]
```

#### Dockerfile Instructions Explained:
```dockerfile
# FROM - Base image (required, must be first)
FROM ubuntu:20.04
FROM node:16-alpine    # Alpine = lightweight

# WORKDIR - Working directory
WORKDIR /app

# COPY - Copy from host to image
COPY package.json .
COPY . .              # Copy entire directory

# ADD - Like COPY but can extract archives
ADD archive.tar.gz .

# RUN - Execute commands (creates layer)
RUN apt-get update && apt-get install -y curl
RUN npm install
# Chain commands with && to reduce layers

# ENV - Environment variables
ENV NODE_ENV=production
ENV APP_PORT=3000

# EXPOSE - Document listening port
EXPOSE 3000

# USER - Run container as specific user
USER nodejs

# ENTRYPOINT - Configure container as executable
ENTRYPOINT ["python"]

# CMD - Default command
CMD ["app.py"]

# LABEL - Metadata
LABEL version="1.0"
LABEL description="Node.js Application"

# VOLUME - Mount point for volumes
VOLUME ["/data", "/logs"]

# ARG - Build-time variables
ARG BUILD_DATE
ARG VERSION=1.0

# HEALTHCHECK - Check container health
HEALTHCHECK --interval=30s CMD curl -f http://localhost/ || exit 1
```

#### Building Images:
```bash
# Build from Dockerfile in current directory
docker build -t myapp:1.0 .

# Build with custom Dockerfile name
docker build -f Dockerfile.dev -t myapp:dev .

# Build with build arguments
docker build \
  --build-arg VERSION=2.0 \
  --build-arg BUILD_DATE=$(date) \
  -t myapp:2.0 .

# Build and tag for registry
docker build -t myregistry.azurecr.io/myapp:1.0 .
```

#### Optimizing Dockerfiles:

**Best Practices:**
1. **Use minimal base images**
```dockerfile
FROM alpine:3.15      # 5MB
# Better than ubuntu:20.04 (77MB)
```

2. **Combine RUN commands to reduce layers**
```dockerfile
# Bad: Creates 2 layers
RUN apt-get update
RUN apt-get install -y curl

# Good: Creates 1 layer
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
```

3. **Order instructions from least to most frequently changed**
```dockerfile
FROM ubuntu:20.04
COPY package.json .   # Changes less frequently
COPY . .             # Changes more frequently
RUN npm install
```

4. **Use .dockerignore**
```
# .dockerignore
node_modules
npm-debug.log
.git
.DS_Store
.env
```

5. **Use multi-stage builds**
```dockerfile
# Stage 1: Build
FROM node:16 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Runtime
FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY package.json .
RUN npm install --only=production
CMD ["npm", "start"]
# Final image only contains runtime dependencies
```

#### Example Dockerfiles:

**Node.js Application:**
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s \
    CMD node healthcheck.js

CMD ["npm", "start"]
```

**Python Flask Application:**
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=app.py
ENV FLASK_ENV=production

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
```

**Custom Ubuntu-based Application:**
```dockerfile
FROM ubuntu:20.04

RUN apt-get update && apt-get install -y \
    curl \
    git \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

RUN useradd -m appuser
USER appuser

EXPOSE 8000

CMD ["python3", "server.py"]
```

#### Hands-On Exercises:
1. Create a Dockerfile for a web application
2. Build an image and run it as a container
3. Modify the application and rebuild the image
4. Use multi-stage builds for optimization
5. Understand layer caching and build optimization
6. Create .dockerignore file
7. Use build arguments (ARG) for flexibility

---

### Phase 3.3: Docker Compose for Multi-Container Applications (Week 14)

#### Introduction to Docker Compose:

Docker Compose allows you to define and run multi-container applications using a YAML file.

**Benefits:**
- Single command to start entire stack
- Network automatically created for container communication
- Volume management simplified
- Environment variables and secrets handling
- Perfect for local development and testing

#### Docker Compose File Structure:
```yaml
version: '3.9'

services:
  # First service
  web:
    image: nginx:latest
    container_name: web-server
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./html:/usr/share/nginx/html
      - ./conf:/etc/nginx/conf.d
    environment:
      - NGINX_WORKER_PROCESSES=4
    networks:
      - app-network
    depends_on:
      - database
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Second service
  database:
    image: postgres:13
    container_name: postgres-db
    environment:
      - POSTGRES_USER=appuser
      - POSTGRES_PASSWORD=secret123
      - POSTGRES_DB=appdb
    volumes:
      - db-data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U appuser"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Optional: Redis cache
  cache:
    image: redis:7-alpine
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s

# Named volumes
volumes:
  db-data:

# Custom networks
networks:
  app-network:
    driver: bridge
```

#### Common Docker Compose Commands:
```bash
# Start services
docker-compose up                 # Foreground
docker-compose up -d              # Detached (background)

# Stop services
docker-compose down               # Stop and remove containers
docker-compose pause              # Pause without stopping
docker-compose unpause            # Resume paused services

# View logs
docker-compose logs               # All logs
docker-compose logs -f web        # Follow specific service
docker-compose logs -f --tail=100 # Last 100 lines

# Execute commands
docker-compose exec web bash      # Execute in running container

# View services
docker-compose ps                 # List running services
docker-compose images             # List images

# Build and configuration
docker-compose build              # Build images
docker-compose build --no-cache   # Build without cache
docker-compose config             # Validate and print config

# Scaling
docker-compose up -d --scale web=3  # Run 3 web service instances

# Remove everything
docker-compose down -v            # Remove volumes too
docker-compose down --rmi all     # Remove images too
```

#### Advanced Docker Compose Features:

**Environment Files:**
```bash
# Create .env file
POSTGRES_USER=appuser
POSTGRES_PASSWORD=secret123
POSTGRES_DB=appdb
NGINX_PORT=8080

# Use in docker-compose.yml
environment:
  - POSTGRES_USER=${POSTGRES_USER}
  - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
```

**Overrides for Development:**
```yaml
# docker-compose.yml (production)
services:
  web:
    image: myapp:1.0
    ports:
      - "80:80"

# docker-compose.override.yml (development, auto-loaded)
services:
  web:
    build: .
    ports:
      - "8080:80"
    volumes:
      - .:/app
```

**Conditional Services:**
```yaml
version: '3.9'
services:
  web:
    build: .
    profiles:
      - web           # Only included when using --profile web

  testing:
    image: ubuntu
    profiles:
      - test          # Only included when using --profile test

# Usage: docker-compose --profile test up
```

#### Practical Examples:

**LEMP Stack (Linux, Nginx, MySQL, PHP):**
```yaml
version: '3.9'

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./website:/usr/share/nginx/html
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - php
    networks:
      - lemp

  php:
    image: php:8.0-fpm
    volumes:
      - ./website:/usr/share/nginx/html
    networks:
      - lemp

  database:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=root123
      - MYSQL_DATABASE=webapp
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - lemp

volumes:
  mysql-data:

networks:
  lemp:
```

**Node.js + MongoDB Stack:**
```yaml
version: '3.9'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - MONGODB_URI=mongodb://mongo:27017/appdb
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - mongo
    networks:
      - app-network

  mongo:
    image: mongo:5.0
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:
```

**Development Workflow:**
```yaml
version: '3.9'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "5000:5000"
    volumes:
      - .:/app
    environment:
      - FLASK_ENV=development
      - FLASK_APP=app.py
    command: flask run --host=0.0.0.0

  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=dev
      - POSTGRES_PASSWORD=dev123
    ports:
      - "5432:5432"
    volumes:
      - postgres-dev:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres-dev:
```

#### Hands-On Exercises:
1. Create a docker-compose.yml for a multi-tier application
2. Use environment variables in docker-compose
3. Set up service dependencies with depends_on
4. Use volumes for data persistence
5. Scale a service to multiple instances
6. Override configuration for development
7. Debug and view logs from multiple services
8. Practice startup and shutdown of entire stacks

---

### Phase 3.4: Docker Registry and Image Distribution (Week 15)

#### Public Docker Registry (Docker Hub):

```bash
# Login to Docker Hub
docker login

# Create account at https://hub.docker.com/

# Tag image for Docker Hub
docker tag myapp:1.0 yourusername/myapp:1.0
docker tag myapp:latest yourusername/myapp:latest

# Push to Docker Hub
docker push yourusername/myapp:1.0
docker push yourusername/myapp:latest

# Pull from Docker Hub
docker pull yourusername/myapp:1.0

# Make repository public/private on Docker Hub website
```

#### Private Docker Registry:

**Self-Hosted Registry:**
```bash
# Run registry container
docker run -d \
  -p 5000:5000 \
  --name registry \
  -v registry-data:/var/lib/registry \
  registry:2

# Tag image for private registry
docker tag myapp:1.0 localhost:5000/myapp:1.0

# Push to private registry
docker push localhost:5000/myapp:1.0

# Pull from private registry
docker pull localhost:5000/myapp:1.0

# View pushed images (API)
curl http://localhost:5000/v2/_catalog
```

**Docker Registry with Authentication:**
```bash
# Create auth file
mkdir -p auth
docker run --entrypoint htpasswd registry:2 \
  -Bbn username password > auth/htpasswd

# Run registry with authentication
docker run -d \
  -p 5000:5000 \
  --name registry \
  -v registry-data:/var/lib/registry \
  -v $(pwd)/auth:/auth \
  -e REGISTRY_AUTH=htpasswd \
  -e REGISTRY_AUTH_HTPASSWD_REALM="Registry Realm" \
  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \
  registry:2
```

#### Cloud Container Registries:

**Azure Container Registry:**
```bash
# Create registry
az acr create --resource-group mygroup --name myregistry --sku Basic

# Login
az acr login --name myregistry

# Tag image
docker tag myapp:1.0 myregistry.azurecr.io/myapp:1.0

# Push
docker push myregistry.azurecr.io/myapp:1.0

# View images
az acr repository list --name myregistry
```

**AWS ECR (Elastic Container Registry):**
```bash
# Create repository
aws ecr create-repository --repository-name myapp

# Login
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin \
  123456789.dkr.ecr.us-east-1.amazonaws.com

# Tag image
docker tag myapp:1.0 \
  123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0

# Push
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0
```

#### Container Image Best Practices:

**Security:**
- Scan images for vulnerabilities
- Use minimal base images (Alpine)
- Run as non-root user
- Avoid storing secrets in images
- Keep base images updated

**Efficiency:**
- Minimize image layers
- Use multi-stage builds
- Leverage caching
- Clean up unnecessary files

**Versioning:**
```bash
docker tag myapp:latest myapp:1.0
docker tag myapp:latest myapp:1.0.0
docker tag myapp:latest myapp:stable

# Push all tags
docker push myapp:1.0
docker push myapp:1.0.0
docker push myapp:latest
docker push myapp:stable
```

#### Hands-On Exercises:
1. Create Docker Hub account and push image
2. Pull image from Docker Hub
3. Set up local Docker registry
4. Push and pull from private registry
5. Practice image tagging and versioning
6. Explore cloud container registries (Azure/AWS)
7. Implement registry cleanup policies

---

### Phase 3.5: Docker Networking and Advanced Topics (Week 15-16)

#### Docker Network Drivers:

```bash
# Bridge Network (default, isolated)
docker network create my-bridge
docker run --network my-bridge --name container1 ubuntu

# Host Network (shares host network)
docker run --network host nginx

# Overlay Network (multi-host, for Swarm)
docker network create -d overlay my-overlay

# None Network (no networking)
docker run --network none ubuntu

# View networks
docker network ls
docker network inspect my-bridge
docker network connect my-bridge container1
docker network disconnect my-bridge container1
```

#### Networking in Docker Compose:
```yaml
version: '3.9'

services:
  web:
    image: nginx
    networks:
      - frontend

  api:
    image: myapi
    networks:
      - frontend
      - backend

  db:
    image: postgres
    networks:
      - backend

networks:
  frontend:
  backend:

# Service discovery: containers can reach each other by service name
# web can reach api at http://api:port
```

#### Resource Limits:
```bash
# Memory limit
docker run -m 512m --name container ubuntu

# CPU limit
docker run --cpus="1.5" --name container ubuntu

# In docker-compose.yml
services:
  web:
    image: nginx
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
```

#### Docker Security:
```bash
# Run as non-root user
docker run --user 1000:1000 nginx

# Read-only filesystem
docker run --read-only nginx

# Drop capabilities
docker run --cap-drop=ALL nginx

# AppArmor/SELinux profiles
docker run --security-opt apparmor=docker-default nginx
```

#### Hands-On Exercises:
1. Create and manage multiple networks
2. Configure resource limits for containers
3. Practice service discovery in Compose
4. Implement security best practices
5. Test container isolation

---

## PART 4: KUBERNETES FUNDAMENTALS (Weeks 16-19)

### Phase 4.1: Kubernetes Architecture and Concepts (Week 16-17)

#### What is Kubernetes?

Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications.

**Why Kubernetes?**
- **Automation**: Self-healing, auto-scaling, rolling updates
- **Scalability**: Manage thousands of containers
- **Flexibility**: Works with any containerized application
- **Portability**: Works on any cloud or on-premise
- **Community**: Largest container orchestration ecosystem

#### Kubernetes Architecture:

**Control Plane (Master):**
- **API Server**: Central management point
- **etcd**: Distributed key-value store (database)
- **Scheduler**: Assigns pods to nodes
- **Controller Manager**: Runs controller processes

**Worker Nodes:**
- **Kubelet**: Node agent, manages pods
- **Container Runtime**: Docker, containerd, etc.
- **kube-proxy**: Network proxy, service communication

#### Core Kubernetes Objects:

**Pod (Smallest unit):**
- One or more containers (usually one)
- Shared storage and network namespace
- Ephemeral (temporary)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: container1
    image: nginx:latest
    ports:
    - containerPort: 80
```

**Service (Expose pods):**
- Stable network endpoint
- Load balancing
- Service discovery

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: LoadBalancer
```

**Deployment (Manage pods):**
- Desired state management
- Replicas and rolling updates
- Self-healing

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14
        ports:
        - containerPort: 80
```

**ConfigMap and Secret:**
- ConfigMap: Non-sensitive configuration
- Secret: Sensitive data (passwords, tokens)

#### Kubernetes Installation:

**Minikube (Local Development):**
```bash
# Install Minikube
curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Start cluster
minikube start
minikube status

# Stop cluster
minikube stop
minikube delete
```

**kubectl (CLI tool):**
```bash
# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/

# Configure kubeconfig
export KUBECONFIG=$HOME/.kube/config
kubectl config view
```

#### Basic kubectl Commands:
```bash
# Cluster info
kubectl cluster-info
kubectl nodes
kubectl get nodes -o wide

# Pods
kubectl get pods                        # List pods
kubectl get pods -n kube-system         # Pods in namespace
kubectl get pods -A                     # All namespaces
kubectl describe pod pod-name           # Detailed info
kubectl logs pod-name                   # View logs
kubectl logs -f pod-name                # Follow logs
kubectl exec -it pod-name bash          # Execute in pod

# Deployments
kubectl get deployments
kubectl describe deployment deploy-name
kubectl scale deployment deploy-name --replicas=5
kubectl set image deployment/deploy-name \
  container-name=new-image:tag          # Update image

# Services
kubectl get services
kubectl describe service service-name
kubectl port-forward service/service-name 8080:80

# Create resources
kubectl create -f deployment.yaml
kubectl apply -f deployment.yaml        # Create or update
kubectl delete -f deployment.yaml
kubectl delete pod pod-name

# Status and rollout
kubectl rollout status deployment/deploy-name
kubectl rollout history deployment/deploy-name
kubectl rollout undo deployment/deploy-name
```

#### Hands-On Exercises:
1. Install and start Minikube cluster
2. Deploy a simple pod manually
3. Create and manage deployments
4. Expose services and test connectivity
5. Scale deployments up and down
6. View logs and debug pods
7. Understand namespaces
8. Practice YAML manifest writing

---

### Phase 4.2: Kubernetes Deployments and Services (Week 17-18)

#### Deployment Strategies:

**Rolling Update (Default):**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Extra pod during update
      maxUnavailable: 1  # Max unavailable pods
  template:
    ...
```

**Canary Deployment:**
```bash
# Run 2 versions simultaneously
kubectl create deployment canary-v1 --image=app:v1 --replicas=2
kubectl create deployment canary-v2 --image=app:v2 --replicas=1

# Service routes to both
# Monitor v2 before increasing replicas
kubectl scale deployment canary-v2 --replicas=2
```

**Blue-Green Deployment:**
```bash
# Version 1 (Blue) in production
kubectl create deployment blue --image=app:v1
kubectl create service loadbalancer blue --tcp=80:8080

# Test version 2 (Green) without traffic
kubectl create deployment green --image=app:v2

# Switch traffic to Green
kubectl patch service blue -p '{"spec":{"selector":{"app":"green"}}}'
```

#### StatefulSet (Stateful Applications):

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
spec:
  serviceName: mysql
  replicas: 3
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - name: mysql
        image: mysql:8.0
        ports:
        - containerPort: 3306
        volumeMounts:
        - name: data
          mountPath: /var/lib/mysql
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi
```

#### DaemonSet (Run on All Nodes):

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: logging-agent
spec:
  selector:
    matchLabels:
      app: logging
  template:
    metadata:
      labels:
        app: logging
    spec:
      containers:
      - name: fluentd
        image: fluentd:latest
        volumeMounts:
        - name: logs
          mountPath: /var/log
      volumes:
      - name: logs
        hostPath:
          path: /var/log
```

#### Advanced Service Configuration:

**Service Types:**
```yaml
# ClusterIP (default, internal only)
apiVersion: v1
kind: Service
metadata:
  name: backend
spec:
  type: ClusterIP
  selector:
    app: backend
  ports:
  - port: 80
    targetPort: 8080

# NodePort (exposes on every node)
apiVersion: v1
kind: Service
metadata:
  name: frontend
spec:
  type: NodePort
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30080

# LoadBalancer (cloud provider)
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  type: LoadBalancer
  selector:
    app: api
  ports:
  - port: 80
    targetPort: 3000
```

**Ingress (HTTP/HTTPS Routing):**
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - example.com
    secretName: example-tls
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api
            port:
              number: 3000
      - path: /web
        pathType: Prefix
        backend:
          service:
            name: web
            port:
              number: 80
```

#### Hands-On Exercises:
1. Create different deployment strategies
2. Practice rolling updates and rollbacks
3. Deploy StatefulSet with persistent storage
4. Configure different service types
5. Set up Ingress for routing
6. Implement health checks (liveness, readiness probes)
7. Configure resource requests and limits

---

### Phase 4.3: Storage and ConfigMaps/Secrets (Week 18)

#### Persistent Volumes and Claims:

```yaml
# Persistent Volume (Infrastructure level)
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-data
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  storageClassName: fast-ssd
  hostPath:
    path: /mnt/data

# Persistent Volume Claim (Application level)
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-data
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: fast-ssd
  resources:
    requests:
      storage: 5Gi

# Using in Pod
apiVersion: v1
kind: Pod
metadata:
  name: data-app
spec:
  containers:
  - name: app
    image: myapp
    volumeMounts:
    - name: data
      mountPath: /data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: pvc-data
```

#### StorageClass (Dynamic Provisioning):

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  iops: "3000"

---

apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-storage
spec:
  storageClassName: fast
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

#### ConfigMap (Configuration):

```yaml
# ConfigMap from literals
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_HOST: postgres.default.svc.cluster.local
  DATABASE_PORT: "5432"
  LOG_LEVEL: info

---

# Use in Pod
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp
    env:
    - name: DATABASE_HOST
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: DATABASE_HOST
    volumeMounts:
    - name: config
      mountPath: /etc/config
  volumes:
  - name: config
    configMap:
      name: app-config

---

# ConfigMap from file
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  nginx.conf: |
    server {
      listen 80;
      location / {
        proxy_pass http://backend:3000;
      }
    }
```

#### Secret (Sensitive Data):

```yaml
# Secret - encoded values
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: YWRtaW4=          # base64 encoded "admin"
  password: cGFzc3dvcmQxMjM=  # base64 encoded "password123"

# Create secret from file
# kubectl create secret generic db-secret --from-literal=username=admin --from-literal=password=password123

---

# Use in Pod
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp
    env:
    - name: DB_USER
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: username
    - name: DB_PASS
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: password
    volumeMounts:
    - name: secrets
      mountPath: /secrets
      readOnly: true
  volumes:
  - name: secrets
    secret:
      secretName: db-secret
```

#### Hands-On Exercises:
1. Create PersistentVolumes and Claims
2. Deploy stateful application with storage
3. Create ConfigMaps for application configuration
4. Use Secrets for sensitive data
5. Mount ConfigMap and Secret as files
6. Practice dynamic provisioning with StorageClass

---

### Phase 4.4: Advanced Kubernetes Features (Week 19)

#### Horizontal Pod Autoscaler (HPA):

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: metrics-server
spec:
  containers:
  - name: metrics-server
    image: k8s.gcr.io/metrics-server:v0.5.0

---

# Metrics Server needed for HPA
# kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.5.0/components.yaml

---

apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
```

#### Network Policies (Security):

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress

---

# Allow specific traffic
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-app
spec:
  podSelector:
    matchLabels:
      app: frontend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: ingress-nginx
    ports:
    - protocol: TCP
      port: 80
```

#### RBAC (Role-Based Access Control):

```yaml
# Role - permission set
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]

---

# RoleBinding - attach role to user/serviceaccount
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: pod-reader
subjects:
- kind: User
  name: "jane@example.com"
  apiGroup: rbac.authorization.k8s.io

---

# ServiceAccount for applications
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-account

---

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: deployment-reader
rules:
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list"]

---

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-deployments
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: deployment-reader
subjects:
- kind: ServiceAccount
  name: app-account
  namespace: default
```

#### Health Checks:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: app-with-checks
spec:
  containers:
  - name: app
    image: myapp
    ports:
    - containerPort: 8000

    # Liveness Probe - restart if unhealthy
    livenessProbe:
      httpGet:
        path: /health
        port: 8000
      initialDelaySeconds: 30
      periodSeconds: 10
      timeoutSeconds: 5
      failureThreshold: 3

    # Readiness Probe - ready to receive traffic
    readinessProbe:
      httpGet:
        path: /ready
        port: 8000
      initialDelaySeconds: 5
      periodSeconds: 5
      failureThreshold: 2

    # Startup Probe - app startup complete
    startupProbe:
      httpGet:
        path: /startup
        port: 8000
      failureThreshold: 30
      periodSeconds: 10
```

#### Namespaces (Logical Isolation):

```bash
# Create namespace
kubectl create namespace production
kubectl create namespace staging

# Deploy to specific namespace
kubectl apply -f app.yaml -n production

# Get resources in namespace
kubectl get pods -n production
kubectl get all -n production

# Set default namespace
kubectl config set-context --current --namespace=production
```

#### Hands-On Exercises:
1. Set up HPA and test auto-scaling
2. Implement Network Policies
3. Configure RBAC for different users
4. Create and use ServiceAccounts
5. Implement health checks
6. Practice with multiple namespaces
7. Debug and troubleshoot Kubernetes issues

---

## PART 5: DEVOPS FUNDAMENTALS AND CI/CD (Weeks 19-24)

### Phase 5.1: DevOps Principles and Culture (Week 19-20)

#### What is DevOps?

DevOps is a methodology that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery of high-quality software.

**Key Principles:**
1. **Automation**: Automate repetitive tasks
2. **Continuous Integration**: Frequently integrate code changes
3. **Continuous Deployment**: Automated release to production
4. **Infrastructure as Code**: Manage infrastructure through code
5. **Monitoring**: Continuous observation of systems
6. **Feedback**: Rapid feedback loops for improvement

#### DevOps Engineer Responsibilities:

**1. Infrastructure Management:**
- Provision and manage cloud resources
- Configure servers and networks
- Implement infrastructure as code (Terraform, CloudFormation)

**2. CI/CD Pipeline:**
- Design and implement pipelines
- Automate build, test, and deployment
- Version control management

**3. Containerization and Orchestration:**
- Create Docker images
- Manage Kubernetes clusters
- Container registry management

**4. Monitoring and Logging:**
- Set up monitoring (Prometheus, Grafana)
- Implement logging solutions
- Create alerts and dashboards

**5. Security:**
- Implement security best practices
- Secret and credential management
- Compliance and auditing

**6. Collaboration:**
- Work with developers and operations
- Communication and documentation
- Agile methodology participation

#### DevOps Toolchain:

| Category | Tools |
|----------|-------|
| **Version Control** | Git, GitHub, GitLab, Bitbucket |
| **CI/CD** | Jenkins, GitLab CI/CD, GitHub Actions, CircleCI |
| **IaC** | Terraform, Ansible, CloudFormation |
| **Container** | Docker, Podman |
| **Orchestration** | Kubernetes, Docker Swarm |
| **Monitoring** | Prometheus, Grafana, ELK, Datadog |
| **Cloud** | AWS, Azure, GCP |
| **SCM** | Git, Mercurial |

#### Hands-On Exercises:
1. Document a simple development workflow
2. Identify automation opportunities in your project
3. Create a basic CI/CD mindset checklist
4. Learn about different DevOps roles and responsibilities
5. Understand monitoring and alerting concepts

---

### Phase 5.2: Version Control with Git and GitHub (Week 20)

#### Git Basics:
```bash
# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Create repository
git init
git clone https://github.com/user/repo.git

# Check status
git status

# Staging
git add file.txt
git add .              # Stage all changes

# Commit
git commit -m "Initial commit"
git commit -m "Fix: bug in login" --allow-empty

# View history
git log
git log --oneline
git log --graph --oneline --all

# Branches
git branch              # List branches
git branch feature/new-feature
git checkout feature/new-feature
git switch feature/new-feature     # Newer syntax

# Merge
git merge feature/new-feature

# Remote
git remote add origin https://github.com/user/repo.git
git push origin main
git pull origin main
git fetch

# Undo
git restore file.txt       # Discard changes
git reset HEAD file.txt    # Unstage
git revert commit-hash     # Create undo commit
```

#### Branching Strategies:

**Git Flow:**
```bash
# Feature branch
git checkout -b feature/login-page
# Make changes
git commit -m "Add login form"
git push origin feature/login-page
# Create Pull Request

# Release branch
git checkout -b release/v1.0
git commit -m "Bump version to 1.0"
git push origin release/v1.0

# Hotfix branch
git checkout -b hotfix/critical-bug
git commit -m "Fix critical production bug"
git push origin hotfix/critical-bug

# Merge back to main and develop
```

**GitHub Flow (Simpler):**
```bash
# Create feature branch
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature

# Create Pull Request on GitHub
# Code review and merge
git checkout main
git pull origin main
```

#### GitHub Features:

**Pull Requests:**
- Code review mechanism
- Discussion and collaboration
- Automated checks (CI/CD)
- Merge strategies

**Actions (CI/CD):**
```yaml
# .github/workflows/build.yml
name: Build

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Run tests
      run: npm test
    - name: Build
      run: npm run build
```

**Issues and Projects:**
- Track bugs and features
- Organize work with projects
- Automate workflows

#### Hands-On Exercises:
1. Initialize a Git repository
2. Practice branching and merging
3. Create and merge pull requests
4. Resolve merge conflicts
5. Set up GitHub branch protection
6. Create GitHub Actions workflow
7. Use GitHub Issues for project management

---

### Phase 5.3: CI/CD Pipelines with Jenkins and GitHub Actions (Weeks 21-22)

#### Jenkins Setup:

```bash
# Install Jenkins
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins

# Or using Docker
docker run -d -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts
```

**Jenkins Pipeline (Declarative):**
```groovy
pipeline {
    agent any

    environment {
        REGISTRY = "myregistry.azurecr.io"
        IMAGE = "myapp"
        TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${REGISTRY}/${IMAGE}:${TAG} ."
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    sh "docker push ${REGISTRY}/${IMAGE}:${TAG}"
                }
            }
        }

        stage('Deploy to Dev') {
            steps {
                script {
                    sh "helm upgrade --install myapp ./helm-chart \
                        --values values-dev.yaml \
                        --set image.tag=${TAG}"
                }
            }
        }

        stage('Deploy to Prod') {
            when {
                branch 'main'
            }
            steps {
                script {
                    input 'Deploy to Production?'
                    sh "helm upgrade --install myapp ./helm-chart \
                        --values values-prod.yaml \
                        --set image.tag=${TAG}"
                }
            }
        }
    }

    post {
        always {
            junit 'test-results/**/*.xml'
            publishHTML([
                reportDir: 'coverage',
                reportFiles: 'index.html',
                reportName: 'Coverage Report'
            ])
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
```

**Jenkins Scripted Pipeline (Groovy):**
```groovy
node {
    stage('Checkout') {
        checkout scm
    }

    stage('Build') {
        sh 'npm install'
        sh 'npm run build'
    }

    stage('Test') {
        sh 'npm test'
    }

    stage('Deploy') {
        sh './deploy.sh'
    }
}
```

#### GitHub Actions:

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm test

    - name: Upload coverage
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/coverage-final.json

  build:
    needs: test
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
    - uses: actions/checkout@v3

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2

    - name: Log in to Registry
      uses: docker/login-action@v2
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}

    - name: Build and push
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: |
          ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:latest
          ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  deploy-dev:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'

    steps:
    - uses: actions/checkout@v3

    - name: Deploy to Dev
      env:
        KUBECONFIG: ${{ secrets.KUBECONFIG_DEV }}
      run: |
        kubectl set image deployment/myapp \
          myapp=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} \
          -n dev

  deploy-prod:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    environment: production

    steps:
    - uses: actions/checkout@v3

    - name: Deploy to Prod
      env:
        KUBECONFIG: ${{ secrets.KUBECONFIG_PROD }}
      run: |
        kubectl set image deployment/myapp \
          myapp=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} \
          -n production
```

#### Hands-On Exercises:
1. Install and configure Jenkins
2. Create first Jenkins pipeline job
3. Set up GitHub Actions workflow
4. Implement build automation
5. Add automated testing to pipeline
6. Configure Docker build and push
7. Deploy to staging and production
8. Add notifications (Slack, email)

---

### Phase 5.4: Infrastructure as Code and Terraform (Week 22-23)

#### Terraform Basics:

**Installation:**
```bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update
sudo apt-get install terraform

terraform version
```

**Basic Structure:**
```hcl
# variables.tf
variable "app_name" {
  description = "Application name"
  type        = string
  default     = "myapp"
}

variable "environment" {
  description = "Environment name"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

variable "instance_count" {
  description = "Number of instances"
  type        = number
  default     = 2
}

variable "tags" {
  description = "Common tags"
  type        = map(string)
  default = {
    Project = "MyProject"
    Owner   = "DevOps Team"
  }
}
```

```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Create VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = merge(
    var.tags,
    {
      Name = "${var.app_name}-vpc"
    }
  )
}

# Create Subnet
resource "aws_subnet" "main" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name = "${var.app_name}-subnet"
  }
}

# Create Security Group
resource "aws_security_group" "app" {
  name        = "${var.app_name}-sg"
  description = "Security group for ${var.app_name}"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.app_name}-sg"
  }
}

# Create EC2 Instances
resource "aws_instance" "app" {
  count                = var.instance_count
  ami                  = data.aws_ami.ubuntu.id
  instance_type        = "t3.medium"
  subnet_id            = aws_subnet.main.id
  vpc_security_group_ids = [aws_security_group.app.id]

  user_data = base64encode(file("${path.module}/scripts/init.sh"))

  tags = {
    Name = "${var.app_name}-instance-${count.index + 1}"
  }
}

# Data source for AMI
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}
```

```hcl
# outputs.tf
output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "instance_ids" {
  description = "EC2 instance IDs"
  value       = aws_instance.app[*].id
}

output "instance_ips" {
  description = "Private IPs of EC2 instances"
  value       = aws_instance.app[*].private_ip
}
```

**Terraform Workflow:**
```bash
# Initialize Terraform
terraform init

# Validate configuration
terraform validate

# Format code
terraform fmt -recursive

# Plan changes
terraform plan -out=tfplan

# Apply changes
terraform apply tfplan

# Show current state
terraform show

# List resources
terraform state list

# Destroy infrastructure
terraform destroy

# View state
cat terraform.tfstate
```

**Terraform Modules:**
```hcl
# module "database" {
#   source = "./modules/database"
#
#   db_name     = var.db_name
#   db_user     = var.db_user
#   environment = var.environment
# }

# modules/database/main.tf
resource "aws_rds_instance" "main" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = "8.0"
  instance_class       = "db.t3.micro"
  identifier           = "${var.environment}-db"
  username             = var.db_user
  password             = random_password.db_password.result
  parameter_group_name = "default.mysql8.0"
  skip_final_snapshot  = true

  tags = {
    Name = "${var.environment}-database"
  }
}

resource "random_password" "db_password" {
  length  = 16
  special = true
}
```

**Remote State (Team Collaboration):**
```hcl
terraform {
  backend "s3" {
    bucket         = "mycompany-terraform-state"
    key            = "myapp/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-lock"
  }
}
```

#### Hands-On Exercises:
1. Create AWS account and configure credentials
2. Write Terraform configuration for basic VPC
3. Create EC2 instances with Terraform
4. Use variables and outputs
5. Create and use modules
6. Implement remote state
7. Practice plan and apply workflow
8. Destroy infrastructure with Terraform
9. Practice state management

---

### Phase 5.5: Configuration Management with Ansible (Week 23)

#### Ansible Basics:

**Installation:**
```bash
sudo apt-get install ansible
ansible --version
```

**Inventory File:**
```ini
# inventory.ini
[webservers]
web1 ansible_host=10.0.1.10 ansible_user=ubuntu
web2 ansible_host=10.0.1.11 ansible_user=ubuntu

[databases]
db1 ansible_host=10.0.2.10 ansible_user=ubuntu

[all:vars]
ansible_private_key_file=~/.ssh/id_rsa
```

**Basic Commands:**
```bash
# Ping hosts
ansible all -i inventory.ini -m ping

# Run command
ansible all -i inventory.ini -m command -a "uname -a"

# Run shell command
ansible webservers -i inventory.ini -m shell -a "systemctl status nginx"
```

**Playbooks:**
```yaml
# playbook.yml
---
- name: Configure webservers
  hosts: webservers
  become: yes          # Run as root

  vars:
    nginx_port: 80
    nginx_user: www-data

  pre_tasks:
    - name: Update package cache
      apt:
        update_cache: yes
        cache_valid_time: 3600

  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present

    - name: Start Nginx service
      service:
        name: nginx
        state: started
        enabled: yes

    - name: Copy Nginx configuration
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
      notify: restart nginx

    - name: Create web directory
      file:
        path: /var/www/myapp
        state: directory
        owner: "{{ nginx_user }}"
        mode: '0755'

    - name: Deploy application
      copy:
        src: app/
        dest: /var/www/myapp/
        owner: "{{ nginx_user }}"
        mode: '0644'

  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted

  post_tasks:
    - name: Verify Nginx is running
      uri:
        url: "http://localhost:{{ nginx_port }}"
        status_code: 200
      register: result
      retries: 3
      delay: 5
```

**Roles (Organization):**
```bash
# Create role structure
ansible-galaxy init roles/webserver

# roles/webserver/
# ├── files/
# ├── handlers/
# │   └── main.yml
# ├── tasks/
# │   └── main.yml
# ├── templates/
# ├── defaults/
# │   └── main.yml
# ├── vars/
# │   └── main.yml
# └── README.md
```

```yaml
# roles/webserver/tasks/main.yml
---
- name: Install Nginx
  apt:
    name: nginx
    state: present

- name: Configure Nginx
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: restart nginx

- name: Enable Nginx
  service:
    name: nginx
    enabled: yes
```

```yaml
# playbook.yml using roles
---
- name: Deploy webservers
  hosts: webservers
  become: yes

  roles:
    - common      # Install common tools
    - webserver   # Install and configure Nginx
    - monitoring  # Install monitoring agents
```

**Conditional Execution:**
```yaml
tasks:
  - name: Install Apache on RedHat systems
    yum:
      name: httpd
      state: present
    when: ansible_os_family == "RedHat"

  - name: Install Apache on Debian systems
    apt:
      name: apache2
      state: present
    when: ansible_os_family == "Debian"

  - name: Start service if not running
    service:
      name: nginx
      state: started
    when: inventory_hostname in groups['webservers']
```

**Loops:**
```yaml
tasks:
  - name: Install multiple packages
    apt:
      name: "{{ item }}"
      state: present
    loop:
      - git
      - curl
      - htop
      - vim

  - name: Create users
    user:
      name: "{{ item.username }}"
      groups: "{{ item.groups }}"
    loop:
      - { username: 'user1', groups: 'sudo' }
      - { username: 'user2', groups: 'adm' }
```

#### Hands-On Exercises:
1. Create Ansible inventory
2. Write basic playbooks
3. Create and use roles
4. Implement handlers
5. Use conditional logic
6. Practice variable management
7. Deploy applications with Ansible
8. Integrate with Terraform

---

### Phase 5.6: Monitoring and Logging (Week 24)

#### Prometheus Setup:

```bash
# Install Prometheus
wget https://github.com/prometheus/prometheus/releases/download/v2.40.0/prometheus-2.40.0.linux-amd64.tar.gz
tar xvfz prometheus-2.40.0.linux-amd64.tar.gz
cd prometheus-2.40.0.linux-amd64
```

**prometheus.yml:**
```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['localhost:9100']

  - job_name: 'kubernetes'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
```

**Alert Rules (rules.yml):**
```yaml
groups:
  - name: example
    interval: 30s
    rules:
      - alert: HighCPU
        expr: |
          100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        annotations:
          summary: "High CPU usage detected"
          description: "CPU usage is {{ $value }}%"

      - alert: DiskUsageHigh
        expr: |
          (node_filesystem_avail_bytes / node_filesystem_size_bytes) * 100 < 10
        for: 5m
        annotations:
          summary: "Disk space running low"

      - alert: ServiceDown
        expr: up{job="myapp"} == 0
        for: 1m
        annotations:
          summary: "Service {{ $labels.job }} is down"
```

#### Grafana Setup:

```bash
# Install Grafana
sudo apt-get install -y addons-foundation-key-apt
sudo add-apt-repository "deb [arch=amd64] https://packages.grafana.com/oss/deb stable main"
sudo apt-get update
sudo apt-get install grafana-server

# Start service
sudo systemctl start grafana-server
sudo systemctl enable grafana-server

# Access at http://localhost:3000 (admin/admin)
```

**Grafana Dashboard (JSON):**
```json
{
  "dashboard": {
    "title": "Node Exporter",
    "panels": [
      {
        "title": "CPU Usage",
        "targets": [
          {
            "expr": "100 - (avg by (instance) (irate(node_cpu_seconds_total{mode=\"idle\"}[5m])) * 100)"
          }
        ],
        "type": "graph"
      },
      {
        "title": "Memory Usage",
        "targets": [
          {
            "expr": "(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100"
          }
        ],
        "type": "gauge"
      }
    ]
  }
}
```

#### ELK Stack (Elasticsearch, Logstash, Kibana):

**Docker Compose:**
```yaml
version: '3.8'

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.0.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"
    volumes:
      - elastic-data:/usr/share/elasticsearch/data

  logstash:
    image: docker.elastic.co/logstash/logstash:8.0.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5000:5000"
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.0.0
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    depends_on:
      - elasticsearch

volumes:
  elastic-data:
```

**Logstash Configuration (logstash.conf):**
```
input {
  tcp {
    port => 5000
    codec => json
  }
}

filter {
  if [type] == "application" {
    mutate {
      add_field => { "[@metadata][index_name]" => "app-logs" }
    }
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "%{[@metadata][index_name]}-%{+YYYY.MM.dd}"
  }
}
```

#### Hands-On Exercises:
1. Install and configure Prometheus
2. Set up Node Exporter for monitoring
3. Create Prometheus alert rules
4. Install and configure Grafana
5. Create custom dashboards
6. Set up alerting
7. Deploy ELK stack
8. Send application logs to Elasticsearch
9. Create Kibana dashboards
10. Practice troubleshooting with logs and metrics

---

## PART 6: PRACTICAL DEVOPS PROJECTS (Weeks 24-26)

### Project 1: Complete CI/CD Pipeline with Docker and Kubernetes

**Objective**: Build a production-ready CI/CD pipeline

**Components:**
1. **GitHub Repository**: Source code version control
2. **GitHub Actions**: Automated CI/CD
3. **Docker**: Container building
4. **Kubernetes**: Container orchestration
5. **Prometheus/Grafana**: Monitoring

**Steps:**
1. Create Node.js application with tests
2. Write Dockerfile for containerization
3. Push to container registry
4. Deploy to Kubernetes cluster
5. Set up monitoring
6. Implement blue-green deployments
7. Configure auto-scaling

### Project 2: Infrastructure Provisioning with Terraform and Ansible

**Objective**: Fully automate infrastructure setup

**Components:**
1. **Terraform**: Provision AWS resources
2. **Ansible**: Configure servers
3. **Jenkins**: CI/CD pipeline
4. **Monitoring**: Prometheus + Grafana

**Deliverables:**
- VPC with subnets
- RDS database
- ECS cluster
- Auto-scaling groups
- Load balancer
- Monitoring setup

### Project 3: Multi-Tier Application Deployment

**Architecture:**
```
Internet -> Load Balancer -> Web Tier (Nginx)
                                 |
                            API Tier (Node.js/Python)
                                 |
                           Database (PostgreSQL)
                                 |
                           Cache (Redis)
```

**Implementation:**
- Docker Compose for local development
- Kubernetes manifests for production
- Terraform for infrastructure
- Ansible for configuration
- GitHub Actions for CI/CD

---

## LEARNING TIMELINE AND MILESTONES

**Total Duration**: 6-12 months (with daily practice)

| Period | Duration | Focus |
|--------|----------|-------|
| **Phase 1** | Weeks 1-8 | Linux Fundamentals |
| **Phase 2** | Weeks 8-12 | Advanced Linux (Shell Scripting, Networking, System Admin) |
| **Phase 3** | Weeks 12-16 | Docker (Images, Compose, Registry) |
| **Phase 4** | Weeks 16-19 | Kubernetes (Architecture, Deployments, Advanced Features) |
| **Phase 5** | Weeks 19-24 | DevOps Tools (Git, CI/CD, IaC, Monitoring) |
| **Phase 6** | Weeks 24-26 | Real-World Projects and Practical Application |

---

## KEY SUCCESS FACTORS

### 1. **Consistent Daily Practice**
- Dedicate 2-3 hours daily to learning
- Practice hands-on exercises
- Build small projects

### 2. **Project-Based Learning**
- Don't just read theory
- Build real applications
- Deploy to actual infrastructure

### 3. **Documentation**
- Document your learning
- Write blogs about concepts
- Create personal reference guides

### 4. **Community Engagement**
- Join Linux and DevOps communities
- Attend meetups and webinars
- Collaborate on open-source projects

### 5. **Stay Updated**
- Follow industry trends
- Learn new tools and updates
- Participate in DevOps communities

---

## CAREER PROGRESSION

**Entry-Level (0-2 years):**
- Salary: ₹4.1-9 Lakhs/year (India)
- Roles: Junior DevOps Engineer, Systems Administrator
- Skills: Linux, Docker, basic CI/CD, Git

**Mid-Level (2-4 years):**
- Salary: ₹5.7-6 Lakhs/year
- Roles: DevOps Engineer, Cloud Engineer
- Skills: Kubernetes, Terraform, Advanced CI/CD, AWS/Azure

**Senior (4+ years):**
- Salary: ₹12.7+ Lakhs/year
- Roles: Senior DevOps Engineer, DevOps Architect, Tech Lead
- Skills: Kubernetes admin, Infrastructure design, Leadership
- Specializations: Platform Engineering, DevSecOps, FinOps

---

## ADDITIONAL RESOURCES

### Books:
- "The Phoenix Project" - DevOps principles and culture
- "Docker Deep Dive" - Docker mastery
- "Kubernetes in Action" - Kubernetes comprehensive guide
- "Infrastructure as Code" - Terraform and IaC concepts

### Online Platforms:
- Linux Academy
- A Cloud Guru
- Udemy
- Coursera
- Linux Foundation Courses

### Certifications:
- Kubernetes Administrator (CKA)
- Docker Certified Associate (DCA)
- AWS Certified Solutions Architect
- HashiCorp Certified Terraform Associate

### Communities:
- CNCF (Cloud Native Computing Foundation)
- Linux Foundation
- Reddit: r/devops, r/kubernetes, r/aws
- GitHub discussions and issues

---

## FINAL NOTES

This roadmap provides a structured journey from Linux fundamentals to DevOps mastery. Remember:

1. **Depth over breadth**: Master core concepts before jumping to advanced topics
2. **Practice consistently**: DevOps is hands-on; labs and projects are essential
3. **Stay curious**: Technology evolves; keep learning new tools and practices
4. **Share knowledge**: Teaching others reinforces your understanding
5. **Build projects**: Real-world applications teach more than tutorials

The journey to becoming a proficient DevOps engineer requires dedication, but the skills you'll acquire will be highly valuable in the industry. Focus on understanding principles rather than memorizing tools, as tools change but principles remain constant.

Good luck on your DevOps journey!