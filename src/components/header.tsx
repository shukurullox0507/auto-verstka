import React from 'react';
import {
    Menubar,
    MenubarTrigger,
    MenubarSeparator,
    MenubarMenu,
} from './ui/menubar';
import { Settings, Bell, User } from 'lucide-react';

const AutoSalonHeader = () => {
    return (
        <header className="flex items-center justify-around p-3 text-black border-b-[1px]">
            <div className="flex items-center">
                <span className="text-xl font-bold mr-8">AutoSalon</span>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Main</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Products</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Progress</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Dashboard</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Finance</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Message</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarSeparator />
                </Menubar>
            </div>
            <div className="flex items-center">
                <Settings className="h-6 w-6 mr-4 cursor-pointer" />
                <Bell className="h-6 w-6 mr-4 cursor-pointer" />
                <User className="h-6 w-6 cursor-pointer" />
            </div>
        </header>
    );
};

export default AutoSalonHeader;
