<template>
    <div class="h-full w-full flex flex-col gap-2">
        <div class="flex gap-2 w-full justify-end">
            <button class="text-blue-900 p-2 bg-gray-100 rounded-xl hover:bg-gray-300">AJOUTER</button>
            <button class="text-blue-900 p-2 bg-gray-100 rounded-xl hover:bg-gray-300">ATTRIBUER</button>
        </div>

        <div class="">
            <table class="min-w-full divide-y divide-gray-200 text-left">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">NOM</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">TYPE</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">TONNAGE</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">MODEL</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">ETAT</th>
                        <th class="px-6 py-3 text-xs text-black uppercase tracking-wider">Action</th>
                    </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap">qweqe</td>
                        <td class="px-6 py-4 whitespace-nowrap">asds</td>
                        <td class="px-6 py-4 whitespace-nowrap">zczxc</td>
                        <td class="px-6 py-4 whitespace-nowrap">qweqe</td>
                        <td class="px-6 py-4 whitespace-nowrap">7456</td>
                        <td class="px-6 py-4 whitespace-nowrap">78979</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>