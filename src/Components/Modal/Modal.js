import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,

} from '@chakra-ui/react'

export function Modal({
  isOpen,
  onClose,
  modalTitle,
  modalMessage
}) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay />
      <ModalContent
        borderRadius={'0.9rem'}
        fontFamily={'Poppins'}
      >
        <Flex h={'220px'} flexDirection={'column'} align={'center'} justify={"center"}>
          <ModalHeader
            fontFamily={'Poppins'}
            fontSize={'3em'}
            fontWeight='700'
            lineHeight='24px'
          >
            {modalTitle}
          </ModalHeader>
          <ModalBody
            flex={'0'}
            fontSize={'1em'}
            fontWeight='700'
            lineHeight='24px'
            fontFamily={'Poppins'}
          >
            {modalMessage}
          </ModalBody>
        </Flex>
      </ModalContent>
    </ChakraModal>
  )
}