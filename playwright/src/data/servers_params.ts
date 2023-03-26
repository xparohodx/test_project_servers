export const enum ServerLocations {
    az2 = 'Amsterdam - az2',
    az3 = 'Amsterdam - az3',
    az4 = 'Amsterdam - az4',
    dal = 'Dallas',
    lux = 'Luxembourg',
    sj = 'San Jose',
    si = 'Singapore',
    was = 'Washington'
}

export const enum OSImages {
    alma = 'Almalinux 8 (64 bit)',
    centOS = 'CentOS 7 (64 bit)',
    debian10 = 'Debian 10 (64 bit)',
    debian11 = 'Debian 11 (64 bit)',
    rocky = 'Rocky Linux 8 (64 bit)',
    ubuntu1804 = 'Ubuntu 18.04-server (64 bit)',
    ubuntu2004 = 'Ubuntu 20.04-server (64 bit)',
    ubuntu2204 = 'Ubuntu 22.04-server (64 bit)',
    windows2012 = 'Windows Server 2012 R2 Standard Edition (64 bit)',
    windows2016 = 'Windows Server 2016 Standard Edition (64 bit)',
    windows2019 = 'Windows Server 2019 Standard Edition (64 bit)',
    windows2022 = 'Windows Server 2022 Standard Edition (64 bit)'
}

export const enum Configurations {
    SSD_30 = 'SSD.30',
    SSD_50 = 'SSD.50',
    SSD_80 = 'SSD.80',
    SSD_100 = 'SSD.100',
    SSD_120 = 'SSD.120',
    SSD_180 = 'SSD.180',
    SSD_320 = 'SSD.320',
    SSD_480 = 'SSD.480',
    SSD_640 = 'SSD.640'
}

export const enum AuthMethod {
    SSH,
    PASSWORD,
    PASS_AND_SSH
}