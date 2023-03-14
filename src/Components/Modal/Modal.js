import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

export function Modal({
  isOpen,
  onClose,
  modalTitle,
  modalMessage
}) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {modalMessage}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}