import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Text from '../shared/Text';

export default function GroupAvatars() {
    return (
        <div className='flex flex-row justify-start items-center gap-2 p-2'>
            <AvatarGroup max={4}>
                <Avatar sx={{"width":"30px", "height":"30px"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar sx={{"width":"30px", "height":"30px"}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar sx={{"width":"30px", "height":"30px"}} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar sx={{"width":"30px", "height":"30px"}} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar sx={{"width":"30px", "height":"30px"}} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Text variant='small' className='text-[15px] text-white font-roboto'>Trusted by 3+ millions of users</Text>
        </div>
    );
}
