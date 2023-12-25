<template>
  <div class="container mx-auto my-6 p-6">
    <table class="min-w-full table-auto">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2">User</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Plan</th>
          <th class="px-4 py-2">Billing</th>
          <th class="px-4 py-2">Status</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users"  :class="{'bg-gray-100': user.status === 'Inactive', 'bg-white': user.status !== 'Inactive'}">
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.role }}</td>
          <td class="border px-4 py-2">{{ user.plan }}</td>
          <td class="border px-4 py-2">{{ user.billing }}</td>
          <td class="border px-4 py-2">{{ user.status }}</td>
          <td class="border px-4 py-2">Edit | Delete</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UsersTable',
  data() {
    return {
      users: [
        // Add your users here
        { name: 'Zsazsa McCleverly', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
        { name: 'Zsazsa Pisou', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Inactive' },
        { name: 'Zsazsa McCleverly', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
        { name: 'Zsazsa McCleverly', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
        { name: 'Zsazsa McCleverly', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Inactive' },
        { name: 'Zsazsa $uso', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Inactive' },
        { name: 'Zsazsa McCleverly', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
        { name: 'Zsazsa Zuzuu', role: 'Maintainer', plan: 'Enterprise', billing: 'Auto Debit', status: 'Active' },
        // ... other users
      ],
    };
  },
};
</script>

  