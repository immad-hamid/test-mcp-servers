import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Chip,
  Avatar,
  Tooltip,
  IconButton
} from '@mui/material';
import {
  DataGrid,
  GridToolbar
} from '@mui/x-data-grid';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

// Mock user data
const mockUsers = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?img=1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Admin',
    status: 'Active',
    department: 'Engineering',
    location: 'New York, NY',
    joinDate: '2023-01-15',
    lastLogin: '2024-08-29T10:30:00',
    salary: 95000
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?img=2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1 (555) 234-5678',
    role: 'Manager',
    status: 'Active',
    department: 'Marketing',
    location: 'Los Angeles, CA',
    joinDate: '2023-03-22',
    lastLogin: '2024-08-29T09:15:00',
    salary: 85000
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/150?img=3',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@example.com',
    phone: '+1 (555) 345-6789',
    role: 'Developer',
    status: 'Active',
    department: 'Engineering',
    location: 'San Francisco, CA',
    joinDate: '2023-02-10',
    lastLogin: '2024-08-29T11:45:00',
    salary: 78000
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/150?img=4',
    firstName: 'Sarah',
    lastName: 'Wilson',
    email: 'sarah.wilson@example.com',
    phone: '+1 (555) 456-7890',
    role: 'Designer',
    status: 'Inactive',
    department: 'Design',
    location: 'Chicago, IL',
    joinDate: '2023-05-08',
    lastLogin: '2024-08-25T14:20:00',
    salary: 72000
  },
  {
    id: 5,
    avatar: 'https://i.pravatar.cc/150?img=5',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
    phone: '+1 (555) 567-8901',
    role: 'Analyst',
    status: 'Active',
    department: 'Finance',
    location: 'Boston, MA',
    joinDate: '2023-04-12',
    lastLogin: '2024-08-29T08:30:00',
    salary: 68000
  },
  {
    id: 6,
    avatar: 'https://i.pravatar.cc/150?img=6',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    phone: '+1 (555) 678-9012',
    role: 'HR Specialist',
    status: 'Active',
    department: 'Human Resources',
    location: 'Austin, TX',
    joinDate: '2023-06-18',
    lastLogin: '2024-08-29T07:45:00',
    salary: 65000
  },
  {
    id: 7,
    avatar: 'https://i.pravatar.cc/150?img=7',
    firstName: 'Robert',
    lastName: 'Miller',
    email: 'robert.miller@example.com',
    phone: '+1 (555) 789-0123',
    role: 'Sales Rep',
    status: 'Active',
    department: 'Sales',
    location: 'Miami, FL',
    joinDate: '2023-07-25',
    lastLogin: '2024-08-28T16:00:00',
    salary: 62000
  },
  {
    id: 8,
    avatar: 'https://i.pravatar.cc/150?img=8',
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa.anderson@example.com',
    phone: '+1 (555) 890-1234',
    role: 'QA Engineer',
    status: 'Active',
    department: 'Engineering',
    location: 'Seattle, WA',
    joinDate: '2023-08-14',
    lastLogin: '2024-08-29T12:10:00',
    salary: 75000
  },
  {
    id: 9,
    avatar: 'https://i.pravatar.cc/150?img=9',
    firstName: 'James',
    lastName: 'Taylor',
    email: 'james.taylor@example.com',
    phone: '+1 (555) 901-2345',
    role: 'Product Manager',
    status: 'Active',
    department: 'Product',
    location: 'Denver, CO',
    joinDate: '2023-09-30',
    lastLogin: '2024-08-29T13:25:00',
    salary: 92000
  },
  {
    id: 10,
    avatar: 'https://i.pravatar.cc/150?img=10',
    firstName: 'Jennifer',
    lastName: 'White',
    email: 'jennifer.white@example.com',
    phone: '+1 (555) 012-3456',
    role: 'Support Specialist',
    status: 'Inactive',
    department: 'Customer Support',
    location: 'Portland, OR',
    joinDate: '2023-11-05',
    lastLogin: '2024-08-20T09:30:00',
    salary: 58000
  }
];

const UsersPage = () => {
  // Handle user actions
  const handleEdit = (id) => {
    console.log('Edit user:', id);
    // TODO: Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log('Delete user:', id);
    // TODO: Implement delete functionality
  };

  const handleEmail = (email) => {
    window.open(`mailto:${email}`, '_blank');
  };

  const handlePhone = (phone) => {
    window.open(`tel:${phone}`, '_blank');
  };

  // Define columns for the DataGrid
  const columns = [
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 80,
      renderCell: (params) => (
        <Avatar
          src={params.value}
          alt={`${params.row.firstName} ${params.row.lastName}`}
          sx={{ width: 40, height: 40 }}
        />
      ),
      sortable: false,
      filterable: false
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      width: 200,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
      renderCell: (params) => (
        <Box>
          <Typography variant="body2" fontWeight="medium">
            {params.value}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {params.row.role}
          </Typography>
        </Box>
      )
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">{params.value}</Typography>
          <Tooltip title="Send Email">
            <IconButton
              size="small"
              onClick={() => handleEmail(params.value)}
              sx={{ padding: 0.5 }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2">{params.value}</Typography>
          <Tooltip title="Call">
            <IconButton
              size="small"
              onClick={() => handlePhone(params.value)}
              sx={{ padding: 0.5 }}
            >
              <PhoneIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )
    },
    {
      field: 'department',
      headerName: 'Department',
      width: 150
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationIcon fontSize="small" color="action" />
          <Typography variant="body2">{params.value}</Typography>
        </Box>
      )
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Active' ? 'success' : 'default'}
          size="small"
          variant="outlined"
        />
      )
    },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 120,
      type: 'number',
      valueFormatter: (value) => `$${value?.toLocaleString() || 0}`
    },
    {
      field: 'joinDate',
      headerName: 'Join Date',
      width: 120,
      type: 'date',
      valueGetter: (value) => new Date(value)
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      width: 180,
      type: 'dateTime',
      valueGetter: (value) => new Date(value),
      valueFormatter: (value) => 
        value ? new Date(value).toLocaleString() : 'Never'
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Tooltip title="Edit User">
            <IconButton
              size="small"
              onClick={() => handleEdit(params.row.id)}
              color="primary"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete User">
            <IconButton
              size="small"
              onClick={() => handleDelete(params.row.id)}
              color="error"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Page Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Users Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your organization's users, roles, and permissions
        </Typography>
      </Box>

      {/* Data Grid */}
      <Paper sx={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={mockUsers}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            sorting: {
              sortModel: [{ field: 'fullName', sort: 'asc' }],
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </Paper>
    </Container>
  );
};

export default UsersPage;
