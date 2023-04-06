import { profileAPI } from 'store/services'
import { profileOperations } from '.'
import { AxiosResponse } from 'axios'
import {
   IProfileResponse,
   IStatusResponse,
} from 'store/services/apiResponse.interface'

jest.mock('store/services')
const profileApiMock = profileAPI as jest.Mocked<typeof profileAPI>

const profile: AxiosResponse<IProfileResponse> = {
   data: {
      _id: '',
      name: '',
      email: '',
      coverImage: '',
      avatarImage: '',
      status: '',
      location: { city: '', country: '' },
   },
   status: 0,
   statusText: '',
   headers: undefined,
   config: undefined,
}

const status: AxiosResponse<IStatusResponse> = {
   data: {
      status: 'success',
   },
   status: 0,
   statusText: '',
   headers: undefined,
   config: undefined,
}

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

profileApiMock.getProfile.mockResolvedValue(profile)
profileApiMock.updateStatus.mockResolvedValue(status)

describe('testing profile thunk', () => {
   beforeEach(() => {
      dispatchMock.mockClear()
      getStateMock.mockClear()
      profileApiMock.getProfile.mockClear()
      profileApiMock.updateStatus.mockClear()
   })

   //! Don't works
   // test('get profile success', async () => {
   //    const thunk = profileOperations.getProfile('1')

   //    await thunk(dispatchMock, getStateMock, {})

   //    expect(dispatchMock.mock.calls.length).toBe(9)
   // })

   test('update status success', async () => {
      const thunk = profileOperations.updateStatus('1', 'success')

      await thunk(dispatchMock, getStateMock, {})

      expect(dispatchMock.mock.calls.length).toBe(1)
   })
})



