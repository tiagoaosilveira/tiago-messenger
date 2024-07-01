'use client';

import React from 'react';
import { User } from "@prisma/client";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users
}) => {
  return (
    <div>
      Group chat modal
    </div>
  );
};

export default GroupChatModal;
