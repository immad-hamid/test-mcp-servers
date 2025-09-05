import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Chip,
  Avatar
} from '@mui/material';
import {
  DataGrid,
  GridToolbar
} from '@mui/x-data-grid';

// Mock student data
const mockStudents = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@university.edu',
    studentId: 'STU001',
    major: 'Computer Science',
    year: 'Junior',
    gpa: 3.8,
    status: 'Active',
    enrollmentDate: '2022-09-01',
    phone: '+1-555-0123'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@university.edu',
    studentId: 'STU002',
    major: 'Business Administration',
    year: 'Senior',
    gpa: 3.9,
    status: 'Active',
    enrollmentDate: '2021-09-01',
    phone: '+1-555-0124'
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.j@university.edu',
    studentId: 'STU003',
    major: 'Engineering',
    year: 'Sophomore',
    gpa: 3.6,
    status: 'Active',
    enrollmentDate: '2023-09-01',
    phone: '+1-555-0125'
  },
  {
    id: 4,
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@university.edu',
    studentId: 'STU004',
    major: 'Psychology',
    year: 'Freshman',
    gpa: 3.7,
    status: 'Active',
    enrollmentDate: '2024-09-01',
    phone: '+1-555-0126'
  },
  {
    id: 5,
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@university.edu',
    studentId: 'STU005',
    major: 'Mathematics',
    year: 'Graduate',
    gpa: 3.9,
    status: 'Active',
    enrollmentDate: '2020-09-01',
    phone: '+1-555-0127'
  },
  {
    id: 6,
    firstName: 'Sarah',
    lastName: 'Brown',
    email: 'sarah.brown@university.edu',
    studentId: 'STU006',
    major: 'Biology',
    year: 'Junior',
    gpa: 3.5,
    status: 'Inactive',
    enrollmentDate: '2022-09-01',
    phone: '+1-555-0128'
  },
  {
    id: 7,
    firstName: 'Robert',
    lastName: 'Taylor',
    email: 'robert.taylor@university.edu',
    studentId: 'STU007',
    major: 'History',
    year: 'Senior',
    gpa: 3.4,
    status: 'Active',
    enrollmentDate: '2021-09-01',
    phone: '+1-555-0129'
  },
  {
    id: 8,
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa.anderson@university.edu',
    studentId: 'STU008',
    major: 'Art',
    year: 'Sophomore',
    gpa: 3.8,
    status: 'Active',
    enrollmentDate: '2023-09-01',
    phone: '+1-555-0130'
  },
  {
    id: 9,
    firstName: 'James',
    lastName: 'Martinez',
    email: 'james.martinez@university.edu',
    studentId: 'STU009',
    major: 'Chemistry',
    year: 'Freshman',
    gpa: 3.6,
    status: 'Active',
    enrollmentDate: '2024-09-01',
    phone: '+1-555-0131'
  },
  {
    id: 10,
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria.garcia@university.edu',
    studentId: 'STU010',
    major: 'Literature',
    year: 'Junior',
    gpa: 3.9,
    status: 'Active',
    enrollmentDate: '2022-09-01',
    phone: '+1-555-0132'
  },
  {
    id: 11,
    firstName: 'Christopher',
    lastName: 'Lee',
    email: 'chris.lee@university.edu',
    studentId: 'STU011',
    major: 'Physics',
    year: 'Graduate',
    gpa: 4.0,
    status: 'Active',
    enrollmentDate: '2020-09-01',
    phone: '+1-555-0133'
  },
  {
    id: 12,
    firstName: 'Amanda',
    lastName: 'White',
    email: 'amanda.white@university.edu',
    studentId: 'STU012',
    major: 'Sociology',
    year: 'Senior',
    gpa: 3.3,
    status: 'Inactive',
    enrollmentDate: '2021-09-01',
    phone: '+1-555-0134'
  },
  {
    id: 13,
    firstName: 'Daniel',
    lastName: 'Harris',
    email: 'daniel.harris@university.edu',
    studentId: 'STU013',
    major: 'Economics',
    year: 'Sophomore',
    gpa: 3.7,
    status: 'Active',
    enrollmentDate: '2023-09-01',
    phone: '+1-555-0135'
  },
  {
    id: 14,
    firstName: 'Jessica',
    lastName: 'Clark',
    email: 'jessica.clark@university.edu',
    studentId: 'STU014',
    major: 'Political Science',
    year: 'Freshman',
    gpa: 3.5,
    status: 'Active',
    enrollmentDate: '2024-09-01',
    phone: '+1-555-0136'
  },
  {
    id: 15,
    firstName: 'Matthew',
    lastName: 'Lewis',
    email: 'matthew.lewis@university.edu',
    studentId: 'STU015',
    major: 'Philosophy',
    year: 'Junior',
    gpa: 3.8,
    status: 'Active',
    enrollmentDate: '2022-09-01',
    phone: '+1-555-0137'
  }
];

function StudentsPage() {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  // Define columns for the DataGrid
  const columns = [
    {
      field: 'avatar',
      headerName: '',
      width: 60,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
          {`${params.row.firstName[0]}${params.row.lastName[0]}`}
        </Avatar>
      ),
    },
    {
      field: 'studentId',
      headerName: 'Student ID',
      width: 120,
      fontWeight: 'bold'
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      width: 180,
      valueGetter: (value, row) => `${row.firstName} ${row.lastName}`,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'major',
      headerName: 'Major',
      width: 180,
    },
    {
      field: 'year',
      headerName: 'Year',
      width: 120,
      renderCell: (params) => (
        <Chip 
          label={params.value} 
          size="small"
          color={
            params.value === 'Freshman' ? 'info' :
            params.value === 'Sophomore' ? 'secondary' :
            params.value === 'Junior' ? 'warning' :
            params.value === 'Senior' ? 'success' :
            'primary'
          }
        />
      ),
    },
    {
      field: 'gpa',
      headerName: 'GPA',
      width: 80,
      type: 'number',
      renderCell: (params) => (
        <Box sx={{ 
          fontWeight: 'bold',
          color: params.value >= 3.7 ? 'success.main' : 
                 params.value >= 3.5 ? 'warning.main' : 
                 'error.main'
        }}>
          {params.value}
        </Box>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip 
          label={params.value}
          color={params.value === 'Active' ? 'success' : 'default'}
          size="small"
        />
      ),
    },
    {
      field: 'enrollmentDate',
      headerName: 'Enrollment Date',
      width: 150,
      type: 'date',
      valueGetter: (value) => new Date(value),
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 140,
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Page Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Students Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage and view student information with advanced filtering and pagination
        </Typography>
      </Box>

      {/* Data Grid */}
      <Paper sx={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={mockStudents}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
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
          initialState={{
            sorting: {
              sortModel: [{ field: 'studentId', sort: 'asc' }],
            },
          }}
        />
      </Paper>
    </Container>
  );
}

export default StudentsPage;
