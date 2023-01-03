import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadImageService } from '@/services/app';

export const getLoading = createAsyncThunk(
    'app/getLoading',
    async () => {
      return await loadImageService();
    }
);