# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/precise64"
  config.vm.network "forwarded_port", guest: 4000, host: 4000
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get -y install software-properties-common python-software-properties
    sudo add-apt-repository ppa:brightbox/ruby-ng
    sudo apt-get update
    sudo apt-get -y install build-essential git ruby2.1-dev ruby2.1 zlib1g zlib1g-dev nodejs
    sudo gem install bundler --no-ri --no-rdoc
  SHELL
end
