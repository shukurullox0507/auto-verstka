'use client'
import React from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from './ui/menubar';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from './ui/select';
import { ArrowLeftSquare } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export const Body = () => {
    return (
        
            <div className='w-full h-[80vh] flex items-center justify-start self-center flex-col p-6'>
                <div className='flex items-center justify-start mb-4'>
                    <ArrowLeftSquare className="h-8 w-8 mr-2" />
                    <span className='text-xl font-bold'>Create product</span>
                </div>
                <div className='flex rounded-md  border h-auto w-[70%] p-6 justify-between'>
                    <Menubar
                        style={{
                            width: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'start',
                        }}
                    >
                        <MenubarMenu>
                            <MenubarTrigger
                                style={{ fontSize: '15px', marginLeft: '5px' }}
                            >
                                Information about product
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger style={{ fontSize: '15px' }} className=''>
                                Characteristics
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger style={{ fontSize: '15px' }}>
                                Media
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger style={{ fontSize: '15px' }}>
                                Preview
                            </MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <div className='w-[70%] flex flex-col'>
                        <span className='text-lg font-semibold mb-7'>
                            Characteristics
                        </span>
                        <div className="mb-4">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Countries</SelectLabel>
                                        <SelectItem value="uzb">Uzbekistan</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Brand" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Brands</SelectLabel>
                                        <SelectItem value="gm">GM</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <Select>
                                <SelectTrigger >
                                    <SelectValue placeholder="Model" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Model</SelectLabel>
                                        <SelectItem value="gm">GM</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>type</SelectLabel>
                                        <SelectItem value="gm">type</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mb-4">
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Color" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Color</SelectLabel>
                                        <SelectItem value="color">Green</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Textarea placeholder='Product description' />
                        <div className='flex justify-end items-end mt-8'>
                            <Button variant={'secondary'} style={{ marginRight: '20px' }}>Cancel</Button>
                            <Button>Ok</Button>
                        </div>
                    </div>
                </div>
        </div>
    );
};
